import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { logger } from '../../shared/logger/appLogger';
import {mailConfig, mailDomain} from './mailConfig';

const mailgun = new Mailgun(FormData);

const mg= mailgun.client(mailConfig);


/*

Template Name: 'checkout_confirmation_template' ---> Está almacenado dentro de la cuenta de mailgun.
// TODO
---> Cargar html desde la carpeta shared/templates/emails/checkoutConfirmationTemplate.html e inyectar las variables
---> Agregar el servicio luego de checkout, cargar antes las variables recipientData (Datos de usuario y datos de la compra)

Request Structure
{
            "recipientData": {
                "recipientFirstName": "xxxx",
                "recipientEmail": "xxx@gmail.com",
                "orderNumber": "12313123",
                "billingAmount": "S/130",
                "beginDate": "04 Mar 2022",
                "endDate": "10 Mar 2022"
            },
            "message": {
              "text"  : "Tu compra ha sido procesada satisfactoriamente"
            },
            "attachment": ""
}

*/

export const sendMailService = async (recipientData: any, message: any, attachment:string) => {
  try {
    const {
      recipientFirstName,
      recipientEmail,
      orderNumber,
      billingAmount,
      beginDate,
      endDate,
    } = recipientData
    const data = {
      from: 'Miguel de Licius <info@licius.pe>',
      to: recipientEmail,
      subject: `${recipientFirstName}! Tu compra fue un éxito`,
      text: message.text,
      inline: attachment,
      template: 'checkout_confirmation_template',
      'h:X-Mailgun-Variables': JSON.stringify({ // be sure to stringify your payload
        orderNumber,
        billingAmount,
        beginDate,
        endDate,
      }),
    };
    const msg = await mg.messages.create(mailDomain.domain,data)
    console.log(msg)
  } catch (error: any) {
    logger.error(error);
    throw new Error(`Error sending email: ${error.message}`);
  }
}
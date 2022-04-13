import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { logger } from '../../shared/logger/appLogger';
import { mailConfig, mailDomain } from './mailConfig';

const mailgun = new Mailgun(FormData);

const mg= mailgun.client(mailConfig);

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
      subject: `${recipientFirstName}! Tu compra fue un éxito :D`,
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
    const msg = await mg.messages.create(mailDomain.domain,data);
  } catch (error: any) {
    logger.error(error);
    throw new Error(`Error sending email: ${error.message}`);
  }
}
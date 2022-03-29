import { Request, Response } from 'express';

const mercadopago = require('mercadopago');

//usario prueba para vendedor 
// {
//     "id": 1097633632,
//     "nickname": "TETE1611178",
//     "password": "qatest7634",
//     "site_status": "active",
//     "email": "test_user_15517438@testuser.com"
// }

export const createOrder = async(req: Request, res: Response) => {
    // token user comprador TEST-8478848049349672-032903-72bbc2f9122050372a15296405f34b1a-1097633632
    // token user vendedor TEST-6200894342963924-031003-fca33936db46969cef6a105914b9ec15-801753391

    mercadopago.configure({
        access_token: 'TEST-6200894342963924-031003-fca33936db46969cef6a105914b9ec15-801753391'
    });
    
    let preference = {
        items: [
          {
            title: "Mi producto",
            unit_price: 100,
            quantity: 1,
          },
        ],
        notification_url:"http://localhost:3434/"
      };
    
      mercadopago.preferences
      .create(preference)
      .then((r:any) =>  {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        res.json(r);
        })
      .catch(function (error: any) {
        console.log(error);
      });

    //   res.send('Hola soy mercado pago')
    
}

export const notificationDeOrder = async (req: Request, res: Response) => {
    const datos = req.query;
    console.log(datos);
    res.status(200)
}
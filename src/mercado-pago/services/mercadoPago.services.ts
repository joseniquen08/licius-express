import mercadopago from 'mercadopago';
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences';
import { CreatePreference } from '../entity/types/mercadoPago.types';

export const createPreferencePostService = async (preferenceRequest: CreatePreference): Promise<PreferenceCreateResponse> => {
  try {
    mercadopago.configure({
      access_token: 'TEST-6925005769155675-033021-3250279145a7baaed946e61bfd0cdcd0-606600073'
    });

    let preference = {
      items: [
        {
          title: preferenceRequest.title,
          unit_price: preferenceRequest.unit_price,
          quantity: preferenceRequest.quantity,
        },
      ],
      back_urls: {
        "success": "http://localhost:3000/restaurante/post/checkout/redirect",
      }
    };
    return await mercadopago.preferences.create(preference);
  } catch (error: any) {
    throw new Error(`Error mercadopago: ${error.message}`);
  }
}
import mercadopago from 'mercadopago';
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences';
import { createAny } from '../../shared/factory/createAny';
import { PaymentSuccessModel } from '../entity/models/mercadoPago.models';
import { CreatePayment, CreatePreference } from '../entity/types/mercadoPago.types';

export const createPreferencePostService = async (preferenceRequest: CreatePreference): Promise<PreferenceCreateResponse> => {
  try {
    mercadopago.configure({
      access_token: `${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
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
        "success": `${process.env.CLIENT_URI}/restaurante/post/checkout/redirect`,
      }
    };
    return await mercadopago.preferences.create(preference);
  } catch (error: any) {
    throw new Error(`Error mercadopago: ${error.message}`);
  }
}

export const createPaymentService = async (paymentRequest: CreatePayment): Promise<void> => {
  try {
    await createAny(PaymentSuccessModel)(paymentRequest);
  } catch (error: any) {
    throw new Error(`Error payment: ${error.message}`);
  }
}

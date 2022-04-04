import { NextFunction, Request, Response } from 'express';
import { logger } from '../../shared/logger/appLogger';
import { sendMailService } from '../services/mailService';

export const sendMail = async (req: Request, res: Response, next: NextFunction) => {
  const { recipientData, message, attachment } = req.body;
  try {
    await sendMailService(recipientData, message, attachment);
    res.json({message: `Email enviado con éxito a ${ recipientData.recipientEmail}`});
    await next();
  } catch (error: any) {
    logger.error(error)
    throw new Error(`Error mailing: ${error.message}`);
  }
}
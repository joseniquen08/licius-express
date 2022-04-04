import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ApplicationError } from "../../shared/customErrors/ApplicationError";

export const signUpClientSchema = yup.object({
  body: yup.object({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email.').required('Email is required'),
    password: yup.string().min(8, 'Min length is 8').required('Password is required.')
  })
});

export const signUpRestaurantSchema = yup.object({
  body: yup.object({
    razon_social: yup.string().required('Razon social is required'),
    ruc: yup.number().min(11).positive().integer().required('RUC is required'),
    nombre_comercial: yup.string().required('Nombre comercial is required'),
    description: yup.string().required('Description is required'),
    category_id: yup.number().required('Category id is required'),
    email: yup.string().email('Invalid email.').required('Email is required'),
    password: yup.string().min(8, 'Min length is 8').required('Password is required.')
  })
});

export const signInUserSchema = yup.object({
  body: yup.object({
    email: yup.string().email('Invalid email.').required('Email is required'),
    password: yup.string().min(8, 'Min length is 8').required('Password is required.'),
    role: yup.number().max(4).positive().required('Role is required'),
  })
});

export const userRequestValidator = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validate({
      body: req.body
    });
    next();
  } catch (error: any) {
    next(new ApplicationError(400, error, 'validation'));
  }
}

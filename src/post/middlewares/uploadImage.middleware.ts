import { NextFunction, Request, Response } from 'express';
import { MulterError } from 'multer';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { uploadOnDisk } from '../services/uploadImage.services';

const uploadImageMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadOnDisk(req, res, function (err: any) {
    if (err instanceof MulterError) {
      next(new ApplicationError(400, 'Not image file'));
    } else if (err) {
      next(new ApplicationError(400, err.message));
    }
    next();
  });
};

export default uploadImageMiddleware;
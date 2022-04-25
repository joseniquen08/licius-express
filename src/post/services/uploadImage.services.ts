import { Request } from 'express';
import multer, { FileFilterCallback, MulterError } from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${Date.now()}.${ext}`);
  }
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'));
  }
};

export const uploadOnDisk = multer({
  storage,
  fileFilter,
}).single('image');
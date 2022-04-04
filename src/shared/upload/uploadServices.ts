import cloudinary from 'cloudinary';

export const cloudinaryService = async (path: string) => {
  try {
    return await cloudinary.v2.uploader.upload(path);
  } catch (error: any) {
    throw new Error(error);
  }
}

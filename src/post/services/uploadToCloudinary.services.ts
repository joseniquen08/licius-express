import { cloudinaryService } from '../../shared/upload/uploadServices';
export const uploadToCloudinaryService = async (image?: any): Promise<any> => {
  try {
    if (image) {
      const { public_id, format, url } = await cloudinaryService(image);
      console.log(url);
    }
  } catch (error: any) {
    throw new Error('error uploading image');
  }
};
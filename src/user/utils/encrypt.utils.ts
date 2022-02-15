import CryptoJS from 'crypto-js';

export const encryptText = async (text: string): Promise<string> => {
  return CryptoJS.AES.encrypt(text, `${process.env.ENCRYPT_SECRET}`).toString();
}
import CryptoJS from 'crypto-js';

export const decryptHash = (hash: string): string => {
  const bytes = CryptoJS.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`);
  return bytes.toString(CryptoJS.enc.Utf8);
}
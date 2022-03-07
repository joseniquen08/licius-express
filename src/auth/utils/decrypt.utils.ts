import CryptoJS from 'crypto-js';

const decryptHash = (hash: string): string => {
  const bytes = CryptoJS.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export const validatePassword = (password: string, encryptedPassword: string): boolean => password === decryptHash(encryptedPassword) ? true : false;
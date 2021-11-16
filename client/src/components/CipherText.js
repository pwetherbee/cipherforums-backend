import { decrypt } from "../helpers/convert.js";
export const CipherText = (text, key, encryptionType) => {
  return decrypt(text, key, encryptionType);
};

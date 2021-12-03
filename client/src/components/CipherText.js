import { decrypt, decryptMultiline } from "../helpers/convert.js";
export const CipherText = (text, key, encryptionType) => {
  return decryptMultiline(text, key, encryptionType);
};

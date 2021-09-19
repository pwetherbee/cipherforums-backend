import { decrypt } from "../helpers/convert.js";
export const CipherText = (text, key) => {
  return decrypt(text, key);
};

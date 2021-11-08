// WILL NOT WORK WITHOUT crypto-js MODULE

let key = document.getElementById("ENC_key").value;
let cipher = document.getElementById("cipher").innerText;
console.log(cipher);
let bytes = CryptoJS.AES.decrypt(cipher, key);
let decrypt = bytes.toString(CryptoJS.enc.Utf8);
document.getElementById("cipher_dec").innerHTML = decrypt;
console.log(decrypt);

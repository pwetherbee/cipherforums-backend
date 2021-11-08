// WILL NOT WORK WITHOUT crypto-js MODULE

let message = document.getElementById("ENC_message").value;
let key = document.getElementById("ENC_key").value;
let ENC_cipher = CryptoJS.AES.encrypt(message, key).toString();
console.log(ENC_cipher);
document.getElementById("cipher").innerHTML = ENC_cipher;

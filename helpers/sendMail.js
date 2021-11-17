const nodemailer = require("nodemailer");
require("dotenv").config();
const env = process.env;
let emailPassword = String(env.EMAIL_PASSWORD);
let emailUsername = String(env.EMAIL_USERNAME);
class EmailTool {
  async sendConfirmation(recipient, emailToken) {
    let transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: emailUsername, // generated ethereal user
        pass: emailPassword, // generated ethereal password
      },
    });
    const emailMessage = `Confirm you email at: http://localhost:3000/verify/${emailToken}`;
    const emailMarkup = `
        <body>
            <h1>Welcome to Cipherforums</h1>
            <h5>Confirm your email here:  </h5>
            <a href = "http://localhost:3000/verify/${emailToken}">Confirm Email</a>
        </body>
    `;

    let info = await transporter.sendMail({
      from: '"CipherForums" <support@cipherforums.com>', // sender address
      to: recipient, // list of receivers
      subject: "Cipherforums Confirmation Email", // Subject line
      text: emailMessage, // plain text body
      html: emailMarkup, // html body
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  }
}

module.exports = new EmailTool();

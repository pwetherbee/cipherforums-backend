const nodemailer = require("nodemailer");
class emailTool {
  async sendConfirmation(recipient, messageText, messageHTML) {
    let transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "support@cipherforums.com", // generated ethereal user
        pass: "theCreekRopeSwing$1", // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: '"CipherForums" <support@cipherforums.com>', // sender address
      to: recipient, // list of receivers
      subject: "Cipherforums Confirmation Email", // Subject line
      text: messageText, // plain text body
      html: messageHTML, // html body
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  }
}

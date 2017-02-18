'use strict';
//In future might add mailOptions here
const nodemailer = require('nodemailer');
const secrets = require('./.secrets');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secrets.nodemailer_email,
        pass: secrets.nodemailer_pass
    }
});

exports.getTransport = () => {
  return transporter;
}

exports.sendResetToken = (toAddress,resetToken) => {
  let mailOptions = {
    from: '"Node-API-Boilerplate"' +secrets.nodemailer_email,
    to: toAddress,
    subject: 'Reset Password',
    text: 'We have recieved a request to update your password. If you did not make this request please ignore.\n\n If you did make this request your reset token is:'+resetToken,
    html: '<p>We have recieved a request to update your password. If you did not make this request please ignore.\n\n If you did make this request your reset token is:'+resetToken+'</p>'
  };

   return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return 400;
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    return 200;
  });
}

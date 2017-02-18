'use strict';
const nodemailer = require('nodemailer');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.emailPass
    }
});

exports.getTransport = () => {
  return transporter;
}

exports.sendResetToken = (toAddress,resetToken) => {
  let mailOptions = {
    from: '"Node-API-Boilerplate"' +config.email,
    to: toAddress,
    subject: 'Reset Password',
    text: 'We have recieved a request to update your password. If you did not make this request please ignore.\n\n If you did make this request your reset token is:'+resetToken,
    html: '<p>We have recieved a request to update your password. If you did not make this request please ignore.<br /> <br /> If you did make this request your reset token is:'+resetToken+'</p>'
  };

   return transporter.sendMail(mailOptions);
}

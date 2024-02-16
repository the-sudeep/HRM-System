const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    secure : true, 
    port : 465,
    host : 'smtp.forwardemail.net',
    auth : {
        user : process.env.EMAIL_USERNAME,
        pass : process.env.EMAIL_PASSWORD,
    },
});
module.exports = transporter;

const transporter = require('../config/mailer');
require('dotenv').config();

exports.sendApplicationReceivedEmail = async(email, name) => {
    const mailOptions = {
        from : process.env.EMAIL_USERNAME,
        to : email,
        subject : 'Application Received',
        html : `
            <p>Dear ${name}</p>
            <p>Thank you for applying for the job. We have received your application and will review it shortly.</p>
            <p>Best regards,<br>Hyberlab</p>
        `
    }

    try{
        await transporter.sendMail(mailOptions);
        console.log("Application received email sent successfully");
    }catch(err){
        console.error("Error while sending application-received email: ", err);
        throw err;
    }
};

/* TODO :
1. send job posted email
2. send application received email
*/


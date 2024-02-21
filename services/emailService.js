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

exports.sendJobPostedEmail = async(email) => {
    const mailOptions = {
        from : process.env.EMAIL_USERNAME,
        to : email,
        subject : 'Job Posted Successfully ',
        html : `
            <p>Dear HR</p>
            <p>You have successfully created a new job.View your job details here : <a href="http://localhost:3000/jobs/">http://localhost:3000/jobs/</a></p>
            <p>Best regards,<br>Hyberlab</p>
        `
    }

    try{
        await transporter.sendMail(mailOptions);
        console.log("Job-posted-email sent successfully");
    }catch(err){
        console.error("Error while sending job-posted-email: ", err);
        throw err;
    }
};

/* TODO :
1. send job posted email
2. send application received email
*/


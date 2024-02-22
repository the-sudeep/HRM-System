
module.exports = function(){
    require('dotenv').config();
    if(!process.env.MONGODB_URL) { console.log("Warning : No MongoDB connection string provided !!")}
    if(!process.env.JWT_SECRET_KEY) { console.log("Warning : No JWT Key provided !!")}
    if(!process.env.EMAIL_USERNAME && !process.env.EMAIL_PASSWORD) {console.log("Warning : Please provided your email-data in order to send emails ")}
}
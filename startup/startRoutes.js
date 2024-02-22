// load routes 
const jobRoutes = require("../routes/jobRoutes"); 
const applicantRoutes = require("../routes/applicantRoutes");
const hrRoutes = require('../routes/userRoute');
module.exports = function(app){
    app.use("/jobs", jobRoutes);
    app.use("/applicant",applicantRoutes)
    app.use("/", hrRoutes);   
}
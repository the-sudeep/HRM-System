// load routes 
const jobRoutes = require("../routes/jobRoutes"); 
const applicantRoutes = require("../routes/applicantRoutes");
const hrRoutes = require('../routes/userRoute');
module.exports = function(app){
    app.use("/api/jobs", jobRoutes);
    app.use("/api/applicant",applicantRoutes)
    app.use("/api/hr", hrRoutes);   
}
const Job = require('../models/Job');

// create a new job (BY HR) 
let jobCreate = async (req, res) => {
    try {
        const { title, company, location, salary, description, requirements } = req.body;
        if (!title || !company || !location || !salary || !description || !requirements) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            })
        };
        let job = await Job.create({
            title,
            company,
            location,
            salary,
            description,
            requirements,
        });
        res.status(200).json({
            success: true,
            message: "Job created successfully",
            newJob: job,
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error: ",
            error: err.message,
        });
    }
};

// get all jobs
let getAllJobs = async (req, res) => {
    try{
        const jobs = await Job.find({});
        if (jobs.length === 0) return res.status(404).json({
            message: "No Jobs found in the database",
        })
        res.status(200).json({
            success: true,
            message: "All jobs fetched successfully",
            jobs
        });
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error: ",
            error : err.message,
        });
    }
};

// get specific job details by id 

let getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({
            success: false,
            message: "Job not found"
        });
        res.status(200).json({
            success: true,
            message: "Job fetched successfully",
            job
        });
    }catch(err){
        res.status(500).json({
            message: "Internal Server Error: ",
            error: err.message,
        });
    }
};
// update the job by ID
let updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            job
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating job",
            error: error.message
        });
    }
};


// delete a job by id
let deleteJob = async (req, res) => {
    try{
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Job deleted successfully",
            job
        });
    }catch(err){
        res.status(500).json({
            message: "Internal Server Error: ",
            error: err.message,
        });
    } 
};

module.exports = {
    jobCreate,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob
};

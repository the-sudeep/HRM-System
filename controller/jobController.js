const {Job} = require('../models/Job');
const mongoose = require('mongoose');

// create a new job (BY HR) 
let jobCreate = async(req,res)=>{
    const { title, company, location, salary, description, requirements } = req.body;
    if (!title || !company || !location || !salary || !description || !requirements) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        })
    };
    const job = Job.create({
        title,
        company,
        location,
        salary,
        description,
        requirements,
    });
    res.status(200).json({
        success : true,
        message : "Job created successfully",
        jobDetails : job
    });
}

// get all jobs
let getAllJobs = async(req,res)=>{
    const jobs = await Job.find({});
    if(!jobs) return res.status(404).json({
        message : "No Jobs found in the database",
    })
    res.status(200).json({
        success : true,
        message : "All jobs fetched successfully",
        jobs
    });
}

// TODO : Update the job details
let updateJob = async(req,res)=>{
    const job = await Job.findById(req.params.id);
    if (!job) {
        return res.status(400).json({
            success : false,
            message : "Job not found"
        });
    }

}

module.exports = {
    jobCreate, 
    getAllJobs,
    updateJob
};
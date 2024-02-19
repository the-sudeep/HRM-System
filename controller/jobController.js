const Job  = require('../models/Job');

// create a new job (BY HR) 
let jobCreate = async(req,res)=>{
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
        success : true,
        message : "Job created successfully",
        newJob : job,
    });
}

// get all jobs
let getAllJobs = async(req,res)=>{
    const jobs = await Job.find({});
    if(jobs.length === 0) return res.status(404).json({
        message : "No Jobs found in the database",
    })
    res.status(200).json({
        success : true,
        message : "All jobs fetched successfully",
        jobs
    });
}

// get specific job details by id 

let getJobById = async(req,res)=>{
    const job = await Job.findById(req.params.id);
    if(!job) return res.status(404).json({
        success : false,
        message : "Job not found"
    });
    res.status(200).json({
        success : true,
        message : "Job fetched successfully",
        job
    });
}

// TODO : Update the job details
let updateJob = async(req,res)=>{
    const job = await Job.findByIdAndUpdate(req.params.id);
    //update the job:
    job.title = req.body.title || job.title;
    job.company = req.body.company || job.company;
    job.location = req.body.location || job.location;
    job.salary = req.body.salary || job.salary;
    job.description = req.body.description || job.description;
    job.requirements = req.body.requirements || job.requirements;
    job.save();

    if(!job) return res.status(404).json({
        success : false,
        message : "Job not found",
    });
    res.status(200).json({
        success : true,
        message : "Job updated successfully",
        job
    });
}

module.exports = {
    jobCreate, 
    getAllJobs,
    getJobById,
    updateJob,
};

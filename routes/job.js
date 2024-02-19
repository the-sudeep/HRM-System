const {jobCreate, getAllJobs,getJobById, updateJob } = require('../controller/jobController');

const express = require('express');
const router = express.Router();

router.post('/jobs/create', jobCreate); // create a new job 
router.get('/jobs', getAllJobs);// get all the jobs 
router.get('/jobs/:id', getJobById); //get job by ID 
router.put('/jobs/:id', updateJob) // update the job by id 

module.exports = router;

const express = require('express');
const router = express.Router();
const {jobCreate, getAllJobs,getJobById, updateJob, deleteJob } = require('../controller/jobController');

const tokenValidator = require('../middlewares/authMiddleware');

router.post('/jobs/create',tokenValidator,jobCreate); // create a new job 
router.get('/jobs', getAllJobs);// get all the jobs 
router.get('/jobs/:id', getJobById); //get job by ID 
router.put('/jobs/:id', updateJob) // update the job by id 
router.delete('/jobs/:id', deleteJob); // delete the job by ID

module.exports = router;

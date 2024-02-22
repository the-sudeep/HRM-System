const express = require('express');
const router = express.Router();
const {jobCreate, getAllJobs,getJobById, updateJob, deleteJob } = require('../controller/jobController');

const tokenValidator = require('../middlewares/authMiddleware');

router.post('/create',tokenValidator,jobCreate); // create a new job 
router.get('/', getAllJobs);// get all the jobs 
router.get('/:id', getJobById); //get job by ID 
router.put('/:id', updateJob) // update the job by id 
router.delete('/:id', deleteJob); // delete the job by ID

module.exports = router;

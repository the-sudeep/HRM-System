const express = require('express');
const router = express.Router();
const {jobCreate, getAllJobs,getJobById, updateJob, deleteJob } = require('../controller/jobController');

const tokenValidator = require('../middlewares/authMiddleware');

router.post('/create',tokenValidator,jobCreate); // create a new job 
router.get('/',tokenValidator, getAllJobs);// get all the jobs 
router.get('/:id', tokenValidator,getJobById); //get job by ID 
router.put('/update/:id',tokenValidator, updateJob) // update the job by id 
router.delete('/delete/:id',tokenValidator, deleteJob); // delete the job by ID

module.exports = router;

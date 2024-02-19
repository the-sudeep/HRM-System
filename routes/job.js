const {jobCreate, getAllJobs, updateJob } = require('../controller/jobController');

const express = require('express');
const router = express.Router();

// create a new job 
router.post('/jobs/create', jobCreate);


// get all the jobs 
router.get('/jobs', getAllJobs);

// update the job of specific id 
router.put('/jobs/:id', updateJob)

module.exports = router;

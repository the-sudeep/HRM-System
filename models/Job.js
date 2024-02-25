const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: String,
  salary: Number,
  description: String,
  requirements: [String],
  deadline : {
    type : Date, 
    required : true
  },
  postedAt: {
    type: Date,
    default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
});

const Job = mongoose.model("Job", jobSchema);

Job.findExpiredJobs = async function() { // static method , (the function will be attached to the model)
  // checks whether the deadline attribute in model is less than current date and returns the expired jobs
  const expiredJobs = await this.find({ deadline: { $lt: new Date() } }); // $lt means less than
  return expiredJobs;
};


module.exports = Job;
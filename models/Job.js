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
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

const job = mongoose.model("HR", jobSchema);
module.export = job;

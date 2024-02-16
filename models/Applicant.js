const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  address: String,
  resume: String,
  previousExperience: [
    {
      position: String,
      company: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;

const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50, // Adjust as needed
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50, // Adjust as needed
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/, // Email format validation
    lowercase: true,
  },
  phone: {
    type: String,
    match: /^[0-9]{10}$/, // Custom validation for phone number format (10 digits)
  },
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

const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  const HR = mongoose.model("HR", hrSchema);
  module.exports = HR;


  
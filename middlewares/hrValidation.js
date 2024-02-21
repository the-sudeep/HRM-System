const Joi = require('joi');
const express = require('express');

const validateHr = async(req, res) => {
    const hrSchema = Joi.object({
        username : Joi.string().min(3).max(25).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(15).required(),
        phone : Joi.number().length(10).pattern(/^98[0-9]{8}$/).required()
    });
    const {error} = hrSchema.validate(req.body);
    if(error) return res.status(400).json({
        error: error.details.map(detail => detail.message)
    });
    next();
}

module.exports = validateHr;
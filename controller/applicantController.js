const Applicant = require("../models/Applicant")
//fs comes default to delete ta string for file from database
const fs = require("fs")

let applicantCreate = async(req,res)=>{
    try {
        let data = req.body
        let file = req.file.filename
        let result = await Applicant.create({   //spread operator to open object i.e "data" and merger file together in a single object
            ...data,
            resume:file
        })
        res.status(200).json({
            success: true,
            message: "Applicant details created successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

let applicantRead = async(req,res)=>{
    try {
        let result = await Applicant.findAll({})
        res.status(200).json({
            success: true,
            message: "Applicant details read successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}
let applicantReadSpecific = async(req,res)=>{
    try {
        let id = req.params.id
        let result = await Applicant.findById(id)
        res.status(200).json({
            success: true,
            message: "Applicant details read successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

let applicantUpdate = async(req,res)=>{
    try {
        let applicantId = req.params.id
        let data = req.body
        let result = await Applicant.findByIdAndUpdate(applicantId,data)
        res.status(200).json({
            success: true,
            message: "Applicant details updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

let applicantDelete = async(req,res)=>{
    try {
        let applicantId = req.params.id
        
        let result = await Applicant.findByIdAndDelete(applicantId)
        fs.unlinkSync(`./public/${result.resume}`)

        res.status(200).json({
            success: true,
            message: "Applicant details deleted successfully"
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

module.exports = {
    applicantCreate,
    applicantRead,
    applicantReadSpecific,
    applicantUpdate,
    applicantDelete
}
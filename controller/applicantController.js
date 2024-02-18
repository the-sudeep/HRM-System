import Applicant from "../models/Applicant.js"
import fs from "fs"

export let applicantCreate = async(req,res)=>{
    try {
        let data = req.body
        let file = req.file
        let result = await Applicant.create({
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

export let applicantRead = async(req,res)=>{
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

export let applicantUpdate = async(req,res)=>{
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

export let applicantDelete = async(req,res)=>{
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
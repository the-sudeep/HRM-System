const Applicant = require("../models/Applicant")
//fs comes default to delete ta string for file from database
const fs = require("fs")

let applicantCreate = async(req,res)=>{
    try {
        let data = req.body
        //searching files through array
        let files = req.files.map((value,index)=>{
            return `${value.filename}`
        })
        let result = await Applicant.create({   //spread operator to open object i.e "data" and merger file together in a single object
            ...data,
            resume:files
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
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: User not authenticated'
            });
        }
        let result = await Applicant.find({}).sort("appliedAt");

        // Check if there are applicants found
        if (result.length > 0) {
            // If applicants found, return them in the response
            res.status(200).json({
                success: true,
                message: "Applicant details read successfully",
                data: result // Return applicants data
            });
        } else {
            // If no applicants found, return a message indicating that
            res.status(404).json({
                success: false,
                message: "No applicants found"
            });
        }

    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}
let applicantReadSpecific = async(req,res)=>{
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: User not authenticated'
            });
        }
        let id = req.params.id
        let result = await Applicant.findById(id)

        if (!result) {
            return res.status(404).json({
                success: false,
                message: 'Applicant not found'
            });
        }

        // Return applicant details
        res.status(200).json({
            success: true,
            message: 'Applicant details read successfully',
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}

let applicantUpdate = async(req,res)=>{
    try {
        //applicant updates his information so no authentication in update
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
        //applicant deletes his information so no authentication in delete
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
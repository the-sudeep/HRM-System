export let appliedJob = async(req,res)=>{
    try {
        let data = req.body
        let file = req.file

        let result = await Test.create({
            ...data,file
        })

        res.status(200).json({
            success:true,
            message:"Successfully saved applied job",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    
}
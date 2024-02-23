const { applicantCreate, applicantRead, applicantUpdate, applicantDelete, applicantReadSpecific } = require("../controller/applicantController");
const express = require('express');
const upload = require("../middlewares/multer");
const tokenValidator = require('../middlewares/authMiddleware');

const router = express.Router();

//name for file should be given as "file" from frontend and max capacity are 3 files allowed
router.post("/create",upload.array("resume",3),applicantCreate)
router.get("/",tokenValidator,applicantRead)
router.get("/:id",tokenValidator,applicantReadSpecific)
router.patch("/update/:id",tokenValidator,applicantUpdate)
router.delete("/delete/:id",tokenValidator,applicantDelete)

module.exports = router
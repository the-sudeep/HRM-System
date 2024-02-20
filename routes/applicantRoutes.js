const { applicantCreate, applicantRead, applicantUpdate, applicantDelete, applicantReadSpecific } = require("../controller/applicantController");
const express = require('express');
const upload = require("../middlewares/multer");
const router = express.Router();

//name for file should be given as "file" from frontend and max capacity are 3 files allowed
router.post("/create",upload.array("file",3),applicantCreate)
router.get("/",applicantRead)
router.get("/:id",applicantReadSpecific)
router.patch("/update/:id",applicantUpdate)
router.delete("/delete/:id",applicantDelete)

module.exports = router
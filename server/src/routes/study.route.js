const express = require("express");
const StudyService = require("../services/study.service");

const router = express.Router();
const service = new StudyService();

router.post("/", service.add);
router.get("/", service.getAll);
router.get("/getCountForms", service.CountForms);
router.get("/getstudywithmostpublishedforms", service.getStudyWithMostPublishedForms);
router.get("/getLatestStudy", service.getLatestStudy);
router.put("/", service.update);
router.delete("/", service.delete);
router.get("/:id", service.getById);
module.exports = router;

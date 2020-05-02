const express = require("express");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService();

router.post("/", service.add);
router.get("/", service.getAll);
router.get("/getStudyWithMostPublishedForms", service.getMostActiveUsers);
router.put("/", service.update);
router.delete("/", service.delete);
router.get("/getByCriteria", service.getByCriteria);
router.get("/:id", service.getById);
module.exports = router;

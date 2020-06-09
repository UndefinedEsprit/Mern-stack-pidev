const express = require("express");
const UserService = require("../services/user.service");
const CsvParser =require("../services/CsvParser");
const router = express.Router();
const service = new UserService();


router.get("/", service.getAll);
router.get("/getMostActiveUsers", service.getMostActiveUsers);
router.post("/", CsvParser);
router.post("/filterByCriteria", service.filterByCriteria);
router.put("/", service.update);
router.delete("/", service.delete);
router.get("/:id", service.getById);
module.exports = router;
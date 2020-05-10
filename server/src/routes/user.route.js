const express = require("express");
const UserService = require("../services/user.service");

const router = express.Router();
const service = new UserService();


router.get("/", service.getAll);
router.get("/getMostActiveUsers", service.getMostActiveUsers);
router.post("/", service.add);
router.post("/filterByCriteria", service.filterByCriteria);
router.put("/", service.update);
router.delete("/", service.delete);
router.get("/:id", service.getById);
module.exports = router;

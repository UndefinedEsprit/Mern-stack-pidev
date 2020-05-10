const express = require('express');
const UserResponseService = require('../services/user_response.service');

const router = express.Router();
const service = new UserResponseService();

router.post('/',service.add);
router.get('/',service.getAll);
router.get("/getLatestUserResponse", service.getLatestUserResponse);
router.get("/getMostAnsweredQuestion", service.getMostAnsweredQuestion);
router.get('/getanswersvolume/:id',service.getAnswersVolume);
router.post('/filteranswersvolumebyusercriteria',service.filterAnswersVolumeByUserCriteria);
router.get('/:id',service.getById);


module.exports = router;
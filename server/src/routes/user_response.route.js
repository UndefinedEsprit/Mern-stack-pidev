const express = require('express');
const UserResponseService = require('../services/user_response.service');

const router = express.Router();
const service = new UserResponseService();

router.post('/',service.add);
router.get('/',service.getAll);
router.get('/:id',service.getById);
router.get('/getanswersvolume/:id',service.getAnswersVolume);

module.exports = router;
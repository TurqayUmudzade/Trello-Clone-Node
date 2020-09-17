const express = require('express');
const router = express.Router();
const teamController = require('../Controllers/teamController');


router.get('/chat', teamController.getChat);



module.exports = router;
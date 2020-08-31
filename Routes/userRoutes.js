const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.get('/my-profile', userController.get_my_profile)
router.post('/my-profile', userController.edit_my_profile)

module.exports = router;
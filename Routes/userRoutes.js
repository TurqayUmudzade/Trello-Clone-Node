const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const upload = require('../Middleware/fileMW');

router.get('/my-profile', userController.get_my_profile)
router.post('/my-profile', userController.edit_my_profile)
router.post('/upload', upload, userController.upload_picture)
module.exports = router;
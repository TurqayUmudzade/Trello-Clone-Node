const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const upload = require('../Middleware/fileMW');
const { requireAuth } = require('../Middleware/authMW');

router.get('/my-profile', requireAuth, userController.get_my_profile)
router.post('/my-profile', requireAuth, userController.edit_my_profile)
router.post('/upload', requireAuth, upload, userController.upload_picture)
module.exports = router;
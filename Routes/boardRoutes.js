const express = require('express');
const router = express.Router();
const boardContoller = require('../Controllers/boardContoller');

router.get('/my-boards', boardContoller.myBoards)
router.post('/create-board', boardContoller.CreateBoard)
router.get('/my-boards/:id', boardContoller.BoardDetails)

module.exports = router;
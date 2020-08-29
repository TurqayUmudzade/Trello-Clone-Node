const express = require('express');
const router = express.Router();
const boardContoller = require('../Controllers/boardContoller');

router.get('/my-boards', boardContoller.myBoards)
router.post('/create-board', boardContoller.CreateBoard)
router.get('/my-boards/:id', boardContoller.BoardDetails)
router.post('/add-list', boardContoller.AddList)

module.exports = router;
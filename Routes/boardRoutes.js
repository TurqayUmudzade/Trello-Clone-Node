const express = require('express');
const router = express.Router();
const boardContoller = require('../Controllers/boardContoller');
const { requireAuth } = require('../Middleware/authMW');

router.get('/my-boards', requireAuth, boardContoller.myBoards)
router.post('/create-board', requireAuth, boardContoller.CreateBoard)
router.get('/my-boards/:id', requireAuth, boardContoller.BoardDetails)
router.post('/my-boards/add-list', requireAuth, boardContoller.AddList)
router.post('/my-boards/add-list-item', requireAuth, boardContoller.AddListItem)

module.exports = router;
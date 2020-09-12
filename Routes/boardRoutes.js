const express = require('express');
const router = express.Router();
const boardContoller = require('../Controllers/boardContoller');
const { requireAuth } = require('../Middleware/authMW');

router.get('/my-boards', requireAuth, boardContoller.myBoards)
router.post('/create-board', requireAuth, boardContoller.CreateBoard)
router.get('/my-boards/:id', requireAuth, boardContoller.BoardDetails)

//LIST HANDLERS
router.post('/my-boards/add-list', requireAuth, boardContoller.AddList)
router.post('/my-boards/add-list-item', requireAuth, boardContoller.AddListItem)

//BOARDS HANDLERS
router.post('/my-boards/AddToFav', requireAuth, boardContoller.AddToFav)
router.post('/my-boards/RemoveFromFav', requireAuth, boardContoller.RemoveFromFav)

//SEARCH BAR
router.get('/search-bar/:searchStr', requireAuth, boardContoller.SearchBar)

//OPTIONS
router.post('/my-boards/remove-list', requireAuth, boardContoller.removeList)


module.exports = router;
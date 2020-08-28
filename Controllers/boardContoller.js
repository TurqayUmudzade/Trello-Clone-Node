const { request } = require("express");

const Board = require('../Models/Board');

//my-board
module.exports.myBoards = (req, res) => {
    Board.find().then(result => {
        res.render('my-boards', { boards: result })
    }).catch(err => {
        console.log(err);
    });
}

//POST
module.exports.CreateBoard = async(req, res) => {
    const { name } = req.body;
    await Board.create({ name });
    res.redirect('/')
}

//my-board/id
module.exports.BoardDetails = async(req, res) => {
    const id = req.params.id;
    Board.findById(id).then(board => {
        res.render('board-details', { board: board })
    }).catch(err => {
        console.log(err);
    })
}
const { request } = require("express");

const Board = require('../Models/Board');

module.exports.myBoards = (req, res) => {
    Board.find().then(result => {
        console.log(result);
        res.render('my-boards', { boards: result })
    }).catch(err => {
        console.log(err);
    });
}

module.exports.CreateBoard = async(req, res) => {
    const { name } = req.body;
    await Board.create({ name });
    res.redirect('/')
}
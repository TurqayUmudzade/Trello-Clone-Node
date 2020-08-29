const { request, response } = require("express");

//const { Board, List } = require('../Models/Board');
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
    await Board.findById(id).then(board => {
        res.render('board-details', { board: board })
    }).catch(err => {
        console.log(err);
    })
}

//:POST/Create-list
module.exports.AddList = async(req, res) => {
    const { id, header } = req.body;
    let doc = await Board.findById(id);
    doc.lists.push({ header: header, listItems: [] })
    await doc.save();
    res.send(doc)
}

module.exports.AddListItem = async(req, res) => {
    const { id, listID, newListItem } = req.body;
    let doc = await Board.findById(id);
    let listDoc = doc.lists.find(list => list.id = listID);
    listDoc.listItems.push(newListItem);
    await doc.save();
    res.send(doc)
}
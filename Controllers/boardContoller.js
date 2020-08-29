const { request } = require("express");

const { Board, List } = require('../Models/Board');

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

//POST
module.exports.AddList = async(req, res) => {

    const { id } = req.body;
    Board.findById(id).then((board) => {
            const list = {
                header: "List1",
                listItem: ['task', 'task2']
            }
            board.lists.push(list);
            board.save();
        }).catch((e) => {
            console.log(e);
        })
        // List.findById('5f49b4db98bcad61a84410e6').then((list) => {
        //     console.log(list)
        // }).catch((e) => {
        //     console.log(e);
        // })

    res.send("sa")
}
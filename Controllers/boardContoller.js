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
    const { name, color } = req.body;
    const users = [req.userID];
    const board = await Board.create({ name, color, users });
    res.redirect('/my-boards/' + board.id)
}

//my-board/id
module.exports.BoardDetails = async(req, res) => {

    const id = req.params.id;
    await Board.findById(id).then(board => {
        if (board.users.includes(req.userID)) {
            res.render('board-details', { board: board, lists: board.lists })
        } else
            res.redirect("/404")
    }).catch(err => {
        console.log(err);
        res.redirect("/404")
    })
}

//:POST/Create-list
module.exports.AddList = async(req, res) => {

    const { id, header } = req.body;
    let doc = await Board.findById(id);
    doc.lists.push({ header: header, listItems: [] })
    await doc.save();
    res.status(200).json({ doc });
}

module.exports.AddListItem = async(req, res) => {
    const { id, listID, listItem } = req.body;
    let doc = await Board.findById(id);
    let listDoc = doc.lists.find(list => list.id = listID);
    listDoc.listItems.push(listItem);
    await doc.save();
    res.send(doc)
}
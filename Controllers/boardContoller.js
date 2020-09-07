const Board = require('../Models/Board');

//my-board
module.exports.myBoards = async(req, res) => {
    let myBoards;
    let starredBoards;

    await Board.find({ users: req.userID }).then(result => {
        myBoards = result;
    }).catch(err => {
        console.log(err);
    });

    await Board.find({ users: req.userID, starred: true }).then(result => {
        starredBoards = result;
    }).catch(err => {
        console.log(err);
    });

    res.render('my-boards', { title: 'My Boards', boards: myBoards, favorites: starredBoards })
}

//POST
module.exports.CreateBoard = async(req, res) => {
    const { name, color } = req.body;
    const users = [req.userID];
    try {
        const board = await Board.create({ name, color, users });
        res.redirect('/my-boards/' + board.id)
    } catch (error) {
        console.log(error);
    }
}

//my-board/id
module.exports.BoardDetails = async(req, res) => {

    const id = req.params.id;
    await Board.findById(id).then(board => {
        if (board.users.includes(req.userID)) {
            res.render('board-details', { title: board.name, board: board, lists: board.lists })
        } else
            res.redirect("/404")
    }).catch(err => {
        console.log(err);
        res.redirect("/404")
    })
}

//:POST/AddToFav
module.exports.AddToFav = async(req, res) => {

    const { id } = req.body;
    console.log(id);
    let board = await Board.findById(id)
    board.starred = true;
    await board.save();
}

//:POST/RemoveFromFav
module.exports.RemoveFromFav = async(req, res) => {

    const { id } = req.body;
    console.log(id);
    let board = await Board.findById(id)
    board.starred = false;
    await board.save();
}

//:POST/add-list
module.exports.AddList = async(req, res) => {

    const { id, header } = req.body;
    let doc = await Board.findById(id);
    doc.lists.push({ header: header, listItems: [] })
    await doc.save();
    res.status(200).json({ doc });
}

//:POST/add-list-item
module.exports.AddListItem = async(req, res) => {
    const { id, listID, listItem } = req.body;
    let doc = await Board.findById(id);
    let listDoc = doc.lists.find(list => list.id === listID);
    listDoc.listItems.push(listItem);
    await doc.save();
    res.send(doc)
}


//:POST/add-list-item
module.exports.SearchBar = async(req, res) => {

    const searchStr = req.params.searchStr;
    await Board.find({ name: { "$regex": searchStr, "$options": "i" }, users: req.userID }).then(result => {
        res.render('../partials/searchBoards', { boards: result });
    }).catch(err => {
        console.log(err);
    });

}
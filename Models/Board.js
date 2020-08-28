const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    header: String,
    listItems: [String]
})

const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lists: [listSchema]
})

const Board = mongoose.model('board', BoardSchema);

module.exports = Board;
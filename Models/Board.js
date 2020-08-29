const mongoose = require('mongoose');



const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lists: [{ header: String, listItems: Array }]
})

const Board = mongoose.model('board', BoardSchema);
module.exports = Board;
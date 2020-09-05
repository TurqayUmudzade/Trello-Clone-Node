const mongoose = require('mongoose');



const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: String,
    starred: { type: Boolean, default: false },
    users: [mongoose.Schema.Types.ObjectId],
    lists: [{ header: String, listItems: Array }]
})

const Board = mongoose.model('board', BoardSchema);
module.exports = Board;
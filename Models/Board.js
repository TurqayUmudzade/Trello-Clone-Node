const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const Board = mongoose.model('board', BoardSchema);

module.exports = Board;
module.exports.getChat = (req, res) => {
    res.render('chat')
}


module.exports.respond = function(socket) {
    socket.on('disconnect', () => {})

    socket.on('SendMessage', msg => {
        socket.broadcast.emit('ReceiveMessage', msg)
    })
}
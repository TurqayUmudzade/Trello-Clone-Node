module.exports.getChat = (req, res) => {
    res.render('chat')
}


module.exports.respond = function(socket) {
    console.log('user join');
    socket.on('disconnect', () => {
        console.log('user left');
    })

    socket.on('SendMessage', msg => {
        socket.broadcast.emit('ReceiveMessage', msg)
    })
}
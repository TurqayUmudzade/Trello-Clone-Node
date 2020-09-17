const socket = io();


socket.on('ReceiveMessage', message => {
    RecieveMsg(message)
})

$('#chat-input').keypress(function(event) {
    if (event.keyCode == 13) {
        //prevent enter from working
        event.preventDefault();
        SendMsg();
    }
});

$('.js-send').on('click', function() {
    SendMsg();
});

function SendMsg() {
    message = $('#chat-input').val();
    $('.body').append("<div class='sent-text-container'>" + message + "</div>");
    //clean textarea
    document.getElementById('chat-input').value = "";
    socket.emit('SendMessage', message)
}

function RecieveMsg(msg) {
    $('.body').append("<div class='recieved-text-container'>" + msg + "</div>");
}
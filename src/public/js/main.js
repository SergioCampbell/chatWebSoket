$(function () {
    
    const socket = io()

    //recive DOM elements from IU
    const messageForm = $('#messageForm')
    const message = $('#message')
    const chat = $('#chat')

    //events
    messageForm.submit(function(e) {
        e.preventDefault()
        socket.emit('send message', message.val())
        message.val('')
        // console.log('sending message: ', message.val())
    })

    socket.on('New message:', (data) => {
        chat.append(data + '<br />')
    })

})
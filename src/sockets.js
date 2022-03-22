
module.exports = function (io) {
    io.on('connection', socket => {
        console.log('New user connected 📎')

        socket.on('send message', (data) => {
            io.sockets.emit('New message:', data)
            console.log('#[Chat event:]#\x1b[32m', data)
        })
    })
}
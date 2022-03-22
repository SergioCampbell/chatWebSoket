const http = require('http')
const path = require('path')

const express = require('express')
//const socketio = require('socket.io')

const app = express()

const server = http.createServer(app)
// const io = socketio.listen(server)
const io = require('socket.io')(server)

// imports sockets service
require('./sockets')(io)

//settings
app.set('port', process.env.PORT || 4000)


//static files
app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static('public'))

//starting server
server.listen(app.get('port'), () => {console.log('Server on port:', app.get('port'))})
const express = require('express')
const app = express()
const mongoose =require('mongoose')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const formatMessage = require('./utils/messages')
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users')
const res = require('express/lib/response')
const server = http.createServer(app)
const io = socketio(server)
//const cors = require('cors')
require('dotenv').config()
const PORT = 7000;
const botName = 'Discussion Forum'

//app.use(cors())
app.use(express.static(__dirname + '/public'));

io.on('connection', socket => {

    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room)
        socket.join(user.room)
        socket.emit('message', formatMessage(botName, 'Welcome to discussion forum'))
        socket.broadcast.to(user.room).emit(
            'message', 
            formatMessage(botName, `${user.username} has joined the discussion`)
        )
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    })

    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id)
        io.to(user.room).emit('message', formatMessage(user.username, msg))
    })

    socket.on('disconnect', () => {
        const user = userLeave(socket.id)
        if(user){
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the discussion`))
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            })
        }
    })

})

const MONGOURI = process.env.DB_URI

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log("DB is connected")
})

mongoose.connection.on('error', (err) => {
    console.log("DB not connected ", err)
})

require('./models/user')
require('./models/post')
require('./models/med')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/meds'))

app.get('/', (req,res) => {
    res.redirect('/home')
})

app.get('/discussion', (req,res) => {
    res.sendFile('index.html', { root: './public' })
})

server.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})


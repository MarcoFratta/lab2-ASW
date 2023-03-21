const express = require('express');
const socketIo = require('socket.io');
const app = express();
const path = require('path');



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'public',
        'index.html'));
});

const server = app.listen(3000, ()=>{
    console.log('Listening on http://localhost:3000');
});

const io = socketIo(server);
io.on('connection', (socket)=>{
    console.log('a user connected');

    socket.on('disconnect', ()=>{
        console.log('user disconnected');
    });
    socket.on('chat message', (msg)=>{
        console.log('received', msg)
        io.emit('chat message', msg);
    });
});



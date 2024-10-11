const http = require('http')
const express = require('express')
// const fs = require('fs/promises')
const { Server: SocketServer } = require('socket.io')
// const path = require('path')
// const cors = require('cors')
// const chokidar = require('chokidar');

const pty = require('node-pty')

const ptyProcess = pty.spawn('bash', [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.INIT_CWD,
    env: process.env
});

const app = express()
const server = http.createServer(app);
const io = new SocketServer({
    cors: '*'
})

app.use(cors())

io.attach(server);


ptyProcess.onData(data => {
    console.log('terminal data', data);
    io.emit('terminal:data', data);
});


io.on('connection', (socket) => {
    console.log('New connection', socket.id);

    socket.on('terminal:write', (data) => {
        console.log('Received data:', data);
        ptyProcess.write(data);
    });
}); 

server.listen(9000, () => {
    console.log('Server running on port 9000')
})




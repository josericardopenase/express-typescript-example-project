const socketIO = require('socket.io');

const socket : any = {};

function  connect(server){
    socket.io = socketIO(server);
}

export default {
    connect,
    socket
}
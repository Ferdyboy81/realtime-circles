var io = require('socket.io')();

io.on('connection', function (socket) {
    //new code in here
    socket.on('add-circle', function (data) {
        io.emit('add-circle', data);
    });
    //new code in here
    socket.on('clear', function (data) {
        io.emit('clear', data);
});
});




module.exports = io;

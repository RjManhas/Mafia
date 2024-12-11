module.exports = function (io, socket) {
    socket.on('message', (message) => {
        if (socket.player && socket.player.roomID) {
            io.in(socket.player.roomID).emit('message', `${socket.player.nickname}: ${message}`);
        } else {
            console.error('Player is not defined or not in a room.');
        }
    });
};

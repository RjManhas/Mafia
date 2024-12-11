import socketIOClient from 'socket.io-client';

/* eslint-disable new-cap */
// Uncomment if you would like to use the deployed server
// const socket = new socketIOClient('mafia-hands-backend-cd.herokuapp.com');

// Uncomment if you would like to use a local server to test server changes
const socket = new socketIOClient('http://178.156.137.192:4001');

socket.on('error', (error) => {
    alert(error.message); // Display the error message to the user
});

export default socket;

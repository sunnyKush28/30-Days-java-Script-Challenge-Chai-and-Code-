const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for new connections
wss.on('connection', (ws) => {
    console.log('New client connected');

    // Event listener for incoming messages from clients
    ws.on('message', (data) => {
        // const responce = JSON.stringify(data)
        console.log(`Received: ${data}`);

        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`${data}`);
            }
        });
    });

    // Event listener for client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });


});

console.log('WebSocket server is running on ws://localhost:8080');

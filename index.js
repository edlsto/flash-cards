const http = require('http');
let app = http.createServer();
const Game = require('./src/Game')
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const secondSet = data.secondSet;

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
const game = new Game([prototypeQuestions]);
game.start();

const http = require('http');
const PORT = 3000;

function router(req, res) {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('<h1>Hello there. I\'m a server and you can send a template here :)</h1>')
            break;
        default:
            res.write('Nope. Only / url is available at the time');
            res.end();
    }
}

const myServer = () => http.createServer(router)
    .listen(PORT, 'localhost', () => {
        console.log(`Listening on port ${PORT}`)
    });

module.exports = {myServer};

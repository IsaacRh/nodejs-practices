const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === "POST" && req.url == "/echo") {
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            /*res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');*/
            res.writeHead(200, {'Content-Type': 'text/plain'});
            body = Buffer.concat(body).toString();
            res.end(body);
        });
    }else{
        res.statusCode = 404;
        res.end("error\nURL not found");
    }
});

server.listen(8000);
console.info("Starting server in http://localhost:8000");
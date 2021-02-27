const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});

server.listen(4000);
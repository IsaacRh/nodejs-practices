const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
    fs.readFile("./big", (err, data) => {
        if (err) {
            console.log("erro ", err);
        }
        res.end(data);
    });
});

server.listen(4000);
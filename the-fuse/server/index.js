"use strict";
const http = require("http");
const fs = require('fs').promises;
const host = 'localhost';
const port = 8080;

let indexFile;

// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
//         .catch(err => {
//             res.writeHead(500);
//             res.end(err);
//             return;
//         });
// };

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on ${port}`);
// });

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

// var express = require("express");
// app = express();

// app.get("/", function(req,res){
//     res.sendFile(__dirname + "/index.html")
// })
// app.get("/estilo.css", function(req,res){
//     res.sendFile(__dirname + "/styles.css")
// })
// app.get("/script.js", function(req,res){
//     res.sendFile(__dirname + "/script.js")
// })

// app.listen(8080);
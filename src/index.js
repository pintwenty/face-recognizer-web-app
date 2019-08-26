import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render( < App / > , document.getElementById("root"));

serviceWorker.unregister();

/*const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/
var http = require('http')
var server = http.createServer((function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello World\n");
}));
server.listen(3000);
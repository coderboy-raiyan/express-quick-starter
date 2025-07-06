import express from "express";
import http from "http";
import config from "./config";

const app = express();
const server = http.createServer(app);

console.log("hello");

server.listen(config.port, () => {
    console.log("Server is listening on PORT " + config.port);
});

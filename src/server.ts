import express, { Request, Response } from "express";
import http from "http";
import config from "./config";

const app = express();
const server = http.createServer(app);

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Server is healthy" });
});

server.listen(config.port, () => {
    console.log("Server is listening on PORT " + config.port);
});

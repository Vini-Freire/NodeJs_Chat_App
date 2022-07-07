import express from "express";
import bodyParser from 'body-parser';
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

import { router } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", "static")));
app.set("views", path.join(__dirname, "..", "static"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (request, response) => {
    return response.render("html/client.html");
});
/**
 * On behalf of how to work with databases
 * There are 3 main approaches in relation databases
 * Being only 2 the best way to avoid rework
 * First is using a query build as knexjs or others
 * And the other one is using a ORM(object relational mapper)
 * to work with entity classes that map tables from the db such as typeorm or sequelize
 */


/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Edicao
 * DELETE = Deletar
 * PATCH = Alterar uma UNICA informacao especifica
 */

//app.use(express.json);
const http = createServer(app); // criando protocolo http
const io = new Server(http); // criando protocolo ws websocket

io.on("connection", (socket: Socket) => {
    console.log("Conectado", socket.id);
});

app.use(bodyParser.json());
app.use(router);

http.listen(3333, () => console.log("Server is running on port 3333"));


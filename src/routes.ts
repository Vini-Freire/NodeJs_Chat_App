import {  Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
 

var router = Router();

const settingsController: SettingsController = new SettingsController();

const usersController: UsersController = new UsersController();

const messagesController: MessagesController = new MessagesController();

/**
 * Note sure why however express.Router() doesn't work on my pc, it takes forever to load anything(get or post)
 */
// Home page route.
/*
router.get('/', function (require, response) {
  response.send('Wiki home page');
})
*/
/***
 * Tipos de parametros em requisicoes http:
 * router params => parametros de rota :
 * http://localhost:3333/post/1 , seria o 1
 * query params => parametros de filtro e busca:
 * http://localhost:3333/post/1? , seria o q vem dps da ?
 * body params => objetos json:
 * body = {
 * message: "asdfasf"}
 */

router.get("/", (request, response) => {
    return response.send("Salve salve familia!");
});

router.post("/settings", settingsController.create);

router.post("/users", usersController.create);

router.post("/messages", messagesController.create);

router.get("/messages/:id", messagesController.showByUser);

router.get("/json", (request, response) => {
    return response.json({
        "message" : "Testando o JSON"

    });
});

router.post("/post", (request, response) => {
    return response.json({ message: "Usuario salvo com sucesso!"})
});

export{ router };
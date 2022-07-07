import sqliteSource from "../../ormconfig";
import { Message } from "../entities/Message";

const MessagesRepository = sqliteSource.getRepository(Message);

export {MessagesRepository};
import sqliteSource from "../../ormconfig";
import { User } from "../entities/User";

const UsersRepository = sqliteSource.getRepository(User);

export {UsersRepository};
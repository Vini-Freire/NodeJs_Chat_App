import sqliteSource from "../../ormconfig";
import { Setting } from "../entities/Setting";

const SettingsRepository = sqliteSource.getRepository(Setting);

export {SettingsRepository};
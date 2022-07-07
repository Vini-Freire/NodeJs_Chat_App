import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsServices {
    async create( {chat, username} : ISettingsCreate){

        const userAlreadyExists = SettingsRepository.findOne( {where: {username},}, );

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        var setting = SettingsRepository.create({
            chat,
            username
        });

        await SettingsRepository.save(setting);

        return setting;
    }
}

export { SettingsServices }
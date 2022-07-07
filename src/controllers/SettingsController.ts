import { Request, Response} from "express"
import { SettingsServices } from "../services/SettingsServices";

class SettingsController {

    async create(request: Request, response: Response){
        const { chat, username} = request.body; //usando desestruturacao acho mais passivel de erro

        const settingsServices = new SettingsServices();

        try {
            return response.json(await settingsServices.create({chat, username}));
        } catch (error) {
            return response.status(400).json({
                message : error.message, 
            });
        }
    }
}

export { SettingsController }
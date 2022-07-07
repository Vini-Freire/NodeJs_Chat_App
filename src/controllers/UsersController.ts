import { Request, Response} from "express"
import { UsersServices } from "../services/UsersServices";

class UsersController {

    async create(request: Request, response: Response): Promise<Response>{
        const { email } = request.body; //usando desestruturacao acho mais passivel de erro

        const usersServices = new UsersServices();

        try {
            var user = await usersServices.create({ email });
        
            return response.json(user);
        } catch (error) {
            return response.status(400).json({
                message : error.message, 
            });
        }

    }
}

export { UsersController }
import { Request, Response} from "express"
import { MessagesServices } from "../services/MessagesServices";

class MessagesController {
    //private messagesServices: MessagesServices = new MessagesServices();
    // why this constructor doesn't work????????????????????????? OMFG
    //constructor(){
    //    this.messagesServices = new MessagesServices();
    //}

    async create(request: Request, response: Response){
        const { admin_id, user_id, text, adminSent} = request.body; //usando desestruturacao acho mais passivel de erro

        const messagesServices = new MessagesServices();

        try {
            return response.json(await messagesServices.create({ admin_id, user_id, text, adminSent}));
        } catch (error) {
            return response.status(400).json({
                message : error.message, 
            });
        }
    }
    // messages/idNumber
    async showByUser(request: Request, response: Response){
        const { id } = request.params;

        const messagesServices = new MessagesServices();

        try {
            return response.json(await messagesServices.listByUser(id));
        } catch (error) {
            return response.status(400).json({
                message : error.message, 
            });
        }
    }
}

export { MessagesController }
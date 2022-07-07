import { MessagesRepository } from "../repositories/MessagesRepository";




interface IMessagesCreate {
    admin_id?: string;
    user_id: string;
    text: string;
    adminSent: boolean;
}

class MessagesServices {

    async create( {admin_id, user_id, text, adminSent} : IMessagesCreate){

        var message = MessagesRepository.create({
            admin_id,
            user_id,
            text,
            adminSent
        });

        await MessagesRepository.save(message);
        
        return message;
    }

    async listByUser ( user_id: string) {
        const list = await MessagesRepository.find({
            where: {user_id,},
            //relations: [ "user" ],
        });

        return list;
    }
}

export { MessagesServices }
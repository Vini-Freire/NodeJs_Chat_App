import { UsersRepository } from "../repositories/UsersRepository";



interface IUsersCreate {
    email: string;
}

class UsersServices {

    async create( {email} : IUsersCreate){
        const userAlreadyExists = UsersRepository.findOne( {where: {email},}, );

        if(userAlreadyExists){
            throw new Error("Email already in use");
        }

        var user = UsersRepository.create({
            email
        });

        await UsersRepository.save(user);
        
        return user;
    }
}

export { UsersServices }
import { User } from '../models/User';
import { UserRepository } from '../repo/userRepository';

export class UserService {

    private userRepository = new UserRepository();
    async createUser(data: any) {
        console.log("data", data)
        const emailExists = await this.userRepository.checkEmailOrMobileExists(data.email, null);
        if (emailExists.exists) {
            return emailExists;
        }
        const mobileExists = await this.userRepository.checkEmailOrMobileExists(null, data.mobile);
        if (mobileExists.exists) {
            return mobileExists;
        }
        const newUser = await this.userRepository.createUser(data);
        return newUser;
    }



    async loginByEmailAndPassword(email: string, password: string): Promise<any | null> {
        return this.userRepository.findByEmailAndPassword(email, password);
    }




    //   async createUser(name: string, email: string) {
    //     return this.userRepository.createUser(name, email);
    //   }

    //   async getAllUsers() {
    //     return this.userRepository.findAllUsers();
    //   }

    //   async getUserById(id: number) {
    //     return this.userRepository.findUserById(id);
    //   }

    //   async updateUser(id: number, name: string, email: string) {
    //     return this.userRepository.updateUser(id, name, email);
    //   }

    //   async deleteUser(id: number) {
    //     return this.userRepository.deleteUser(id);
    //   }

}
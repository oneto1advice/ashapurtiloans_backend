import { generateToken } from '../../middlewares/jwtConfig';
import { User } from '../models/User';
import { UserRepository } from '../repo/userRepository';
import bcrypt from 'bcryptjs';

export class UserService {

    private userRepository = new UserRepository();
    async createUser(data: any) {
        const emailExists = await this.userRepository.checkEmailOrMobileExists(data.email, null);
        if (emailExists.exists) {
            return emailExists;
        }
        const mobileExists = await this.userRepository.checkEmailOrMobileExists(null, data.mobile);
        if (mobileExists.exists) {
            return mobileExists;
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        const newUser = await this.userRepository.createUser(data);
        return newUser;
    }



    async loginByEmailAndPassword(email: string, password: string): Promise<any | null> {
        const user = await this.userRepository.findByEmail(email);
        if (user === null) return { statusCode: 401, message: "User not Found", status: "failed" };
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return { statusCode: 401, message: "Password not match", status: "failed" };
        if (user.jwtToken) {
            return this.userRepository.findByEmailAndPassword(user.jwtToken);
        } else {
            const jwtToken = generateToken({ id: user.id, email: user.email });
            let id = user.id;
            return this.userRepository.UpdateTokenEmailAndPassword(id, jwtToken);
        }

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
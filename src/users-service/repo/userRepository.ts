import { generateToken } from '../../middlewares/jwtConfig';
import { AppDataSource } from '../config/databaseConfig';
import { User } from '../models/User';

export class UserRepository {
    private userRepository = AppDataSource.getRepository(User);
    async createUser(data: any): Promise<any> {
        try {
            let savedUser = await this.userRepository.save(data)
            const token = generateToken({ id: savedUser.id, email: data.email });
            savedUser.jwtToken = token;
            await this.userRepository.save(savedUser);
            return { statusCode: 200, message: "Register successfully.", status: "success" };
        } catch (error) {
            console.error('Error creating question:', error);
            throw error;
        }
    }


    async checkEmailOrMobileExists(email: any, mobile: any): Promise<any> {
        const existingUser = await this.userRepository.findOne({
            where: [
                { email: email },
                { mobile: mobile }
            ]
        });
        const exists = !!existingUser;
        const message = "Email or mobile already exists.";
        const status = "error";
        return { exists, message, status, data: {} };
    }


    async findByEmail(email: string): Promise<any | null> {
        return await this.userRepository.findOneBy({ email });
    }

    async findByEmailAndPassword(jwtToken: string): Promise<any | null> {
        let existsUser = await this.userRepository.findOneBy({ jwtToken });
        return existsUser !== null ? { statusCode: 200, message: "Login successfully.", status: "success", data: existsUser } : { statusCode: 401, message: "Invalid email or password", status: "failed" };
    }


    async UpdateTokenEmailAndPassword(id: number, jwtToken: string): Promise<any | null> {
        const user = await this.userRepository.findOneBy({ id });
        console.log("user", user)
        if (user) {
            user.jwtToken = jwtToken;
            await this.userRepository.save(user);
        }
        return user !== null ? { statusCode: 200, message: "Login successfully.", status: "success", data: user } : { statusCode: 401, message: "Invalid email or password", status: "failed" };
    }

    async findAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findUserById(id: number): Promise<User | null> {
        return await this.userRepository.findOneBy({ id });
    }

    async updateUser(id: number, name: string, email: string): Promise<User | null> {
        const user = await this.userRepository.findOneBy({ id });
        if (user) {
            user.fullName = name;
            user.email = email;
            return await this.userRepository.save(user);
        }
        return null;
    }

    async deleteUser(id: number): Promise<boolean> {
        const result = await this.userRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }
}
import { generateToken } from '../../middlewares/jwtConfig';
import { UserRepository } from '../repo/userRepository';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
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
        if(user.status == 0) return { statusCode: 401, message: "Your account is disable. Please talk to Ashapurti Loans team", status: "failed" };
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


    async getAllUsers() {
        return this.userRepository.findAllUsers();
    }

    async getUserById(id: number) {
        return this.userRepository.findUserById(id);
    }

    async updateUser(id: number, name: string, email: string) {
        return this.userRepository.updateUser(id, name, email);
    }

    async deleteUser(id: number) {
        return this.userRepository.deleteUser(id);
    }


    async sendResetPasswordLink(email: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        const token = generateToken({ id: user.id, email: user.email });
        user.jwtToken = token;
        //user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour expiry
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAILNODEMAILER_USER,
                pass: process.env.GMAILNODEMAILER_PASSWORD,
            },
        });

        const mailOptions = {
            to: user.email,
            from: process.env.GMAILNODEMAILER_USER,
            subject: 'AshaPurtiLoans Reset Password Link',
            text: `You are receiving this because you have requested to reset your password. Please click the following link: \n\nhttp://localhost:3000/api/password-reset/${token}`,
        };
        await transporter.sendMail(mailOptions);
        return  await this.userRepository.sendPasswordLink(user);
    }


    async resetPassword(token: string, newPassword: string) {
        const user = await this.userRepository.findByResetToken(token);
        if (!user) {
            throw new Error('Password reset token is invalid or has expired');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword; // You should hash the password here using bcrypt
        return await this.userRepository.findByResetTokenSave(user)
    }


    async disableAccount(id: number, status: string){
        const user = await this.userRepository.findByUserId(id);
        if (!user) {
            throw new Error('User not found');
        }
        user.status = status;
        return await this.userRepository.findByUserIdSave(user)
    }


}



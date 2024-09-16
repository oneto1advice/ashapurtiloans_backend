import { LoanRepository } from '../repo/blogRepository';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export class LoanService {

    private loanRepository = new LoanRepository();
    async createLoan(data: any) {
        const newLoan = await this.loanRepository.createLoan(data);
        return newLoan;
    }

    async getAllLoans() {
        return this.loanRepository.findAllLoans();
    }

    async getLoanById(id: number) {
        return this.loanRepository.findLoanById(id);
    }

    async updateLoan(id: number, body: string) {
         return this.loanRepository.updateLoan(id, body);
    }

    async deleteLoan(id: number) {
        return this.loanRepository.deleteLoan(id);
    }


    // async sendResetPasswordLink(email: string) {
    //     const user = await this.loanRepository.findByEmail(email);
    //     if (!user) {
    //         throw new Error('User not found');
    //     }
    //     const token = generateToken({ id: user.id, email: user.email });
    //     user.jwtToken = token;
    //     //user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour expiry


    //     // Send email
    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: process.env.GMAILNODEMAILER_USER,
    //             pass: process.env.GMAILNODEMAILER_PASSWORD,
    //         },
    //     });

    //     const mailOptions = {
    //         to: user.email,
    //         from: process.env.GMAILNODEMAILER_USER,
    //         subject: 'AshaPurtiLoans Reset Password Link',
    //         text: `You are receiving this because you have requested to reset your password. Please click the following link: \n\nhttp://localhost:3000/api/password-reset/${token}`,
    //     };
    //     await transporter.sendMail(mailOptions);
    //     return  await this.loanRepository.sendLoanLink(user);
    // }





}



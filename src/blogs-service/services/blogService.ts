import { BlogRepository } from '../repo/blogRepository';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
export class BlogService {

    private blogRepository = new BlogRepository();
    async createBlog(data: any) {
        const newBlog = await this.blogRepository.createBlog(data);
        return newBlog;
    }

    async getAllBlogs() {
        return this.blogRepository.findAllBlogs();
    }

    async getBlogById(id: number) {
        return this.blogRepository.findBlogById(id);
    }

    async updateBlog(id: number, body: string) {
         return this.blogRepository.updateBlog(id, body);
    }

    async deleteBlog(id: number) {
        return this.blogRepository.deleteBlog(id);
    }


    // async sendResetPasswordLink(email: string) {
    //     const user = await this.blogRepository.findByEmail(email);
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
    //         subject: 'AshaPurtiBlogs Reset Password Link',
    //         text: `You are receiving this because you have requested to reset your password. Please click the following link: \n\nhttp://localhost:3000/api/password-reset/${token}`,
    //     };
    //     await transporter.sendMail(mailOptions);
    //     return  await this.blogRepository.sendBlogLink(user);
    // }





}



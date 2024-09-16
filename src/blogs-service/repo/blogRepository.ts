import { AppDataSource } from '../config/databaseConfig';
import { Loans } from '../models/Blogs';

export class LoanRepository {
    private loanRepository = AppDataSource.getRepository(Loans);
    async createLoan(data: any): Promise<any> {
        try {
            let savedLoan = await this.loanRepository.save(data)
            await this.loanRepository.save(savedLoan);
            return { statusCode: 200, message: "Create successfully.", status: "success" };
        } catch (error) {
            console.error('Error creating question:', error);
            throw error;
        }
    }

    async findByEmail(title: string): Promise<any | null> {
        return await this.loanRepository.findOneBy({ title });
    }

    

    async findAllLoans(): Promise<Loans[]> {
        return await this.loanRepository.find();
    }

    async findLoanById(id: number): Promise<Loans | null> {
        return await this.loanRepository.findOneBy({ id });
    }

    async updateLoan(id: number, body: string): Promise<Loans | null> {
        const loan = await this.loanRepository.findOne({ where: { id } });
        if (loan) {
            Object.assign(loan, body);
            return await this.loanRepository.save(loan);
        }
        return null; 
    }

    async deleteLoan(id: number): Promise<boolean> {
        const result = await this.loanRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }

    async findByLoanId(id: number): Promise<any | null> {
        return this.loanRepository.findOne({ where: { id: id } });
    }

    async sendLoanLink(user: any): Promise<any> {
        await this.loanRepository.save(user);
        return { statusCode: 200, message: "Reset password has been sent successfully on your mailId.", status: "success" }
    }
}
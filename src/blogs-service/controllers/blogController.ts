import { Request, Response } from 'express';
import { LoanService } from '../services/blogService';

const loanService = new LoanService();
export const createLoan = async (req: Request, res: Response) => {
  try {
    const user = await loanService.createLoan(req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllLoans = async (_req: Request, res: Response) => {
  try {
    const users = await loanService.getAllLoans();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getLoanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await loanService.getLoanById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Loan not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLoan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const loan = await loanService.updateLoan(Number(id), req.body);
    if (loan) {
      res.json({status: 200, message: 'Loan data found', data: loan });
    } else {
      res.json({status: 404, message: 'Loan not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLoan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await loanService.deleteLoan(Number(id));
    if (success) {
      res.json({status: 200, message: 'Loan data delete successfully'});
    } else {
      res.json({status: 404, message: 'Loan not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};








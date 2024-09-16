import { Router } from 'express';
import {
  createLoan,
  getLoanById,
  getAllLoans,
  updateLoan,
  deleteLoan,
} from '../controllers/loanController';

const router = Router();

router.post('/create', createLoan);
router.get('/loans', getAllLoans);
router.get('/loans/:id', getLoanById);
router.put('/loans/:id', updateLoan);
router.delete('/loans/:id', deleteLoan);

export default router;
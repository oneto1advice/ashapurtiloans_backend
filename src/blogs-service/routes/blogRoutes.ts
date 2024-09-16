import { Router } from 'express';
import {
  createLoan,
  getLoanById,
  getAllLoans,
  updateLoan,
  deleteLoan,
} from '../controllers/blogController';

const router = Router();

router.post('/create', createLoan);
router.get('/blogs', getAllLoans);
router.get('/blogs/:id', getLoanById);
router.put('/blogs/:id', updateLoan);
router.delete('/blogs/:id', deleteLoan);

export default router;
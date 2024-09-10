import { Router } from 'express';
import {
  createUser,
  loginByEmailAndPassword,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  sendResetLink,
  passwordResetWithToken
} from '../controllers/userController';

const router = Router();

router.post('/register', createUser);
router.post('/login', loginByEmailAndPassword);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/forgot-password', sendResetLink);
router.post('/password-reset/:token', passwordResetWithToken);

export default router;
import { Router } from 'express';
import {
  createUser,
  loginByEmailAndPassword
} from '../controllers/userController';

const router = Router();

router.post('/users', createUser);
router.post('/login/user', loginByEmailAndPassword);
// router.get('/users', getAllUsers);
// router.get('/users/:id', getUserById);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;
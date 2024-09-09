import { Router } from 'express';
import {
  createUser,
  loginByEmailAndPassword,
  // updateUser
} from '../controllers/userController';

const router = Router();

router.post('/register', createUser);
router.post('/login', loginByEmailAndPassword);
// router.put('/users/:id', updateUser);
// router.get('/users', getAllUsers);
// router.get('/users/:id', getUserById);
// router.put('/users/:id', updateUser);
// router.delete('/users/:id', deleteUser);

export default router;
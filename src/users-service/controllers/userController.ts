import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();
export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await userService.createUser(req.body);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };

  export const loginByEmailAndPassword = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await userService.loginByEmailAndPassword(email, password);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

// export class UserController {
//     const userService = new UserService();
//     async createUser(req: Request, res: Response): Promise<void> {
//       try {
//         const user = await this.userService.createUser(req.body);
//         if (user) {
//             res.json({ message: 'Submit successful', user });
//           } else {
//             res.status(401).json({ message: 'Invalid details' });
//           }
//       } catch (error) {
//         res.status(500).send('Server error');
//      }
// }

// }


// export const createUser = async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   try {
//     const user = await userService.createUser(name, email);
//     res.status(201).json(user);
//   } catch (error: any) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export async function createUser(req: Request, res: Response): Promise<void> {
//     try {
//       const newUser = await UserService.createUser(req.body);
//       console.log(newUser)
//       res.status(200).json(newUser);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   }


// export const getAllUsers = async (_req: Request, res: Response) => {
//     try {
//       const users = await userService.getAllUsers();
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   export const getUserById = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const user = await userService.getUserById(Number(id));
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   export const updateUser = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const { name, email } = req.body;
//     try {
//       const user = await userService.updateUser(Number(id), name, email);
//       if (user) {
//         res.json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
  
//   export const deleteUser = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     try {
//       const success = await userService.deleteUser(Number(id));
//       if (success) {
//         res.status(204).send();
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
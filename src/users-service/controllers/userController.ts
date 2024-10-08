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


export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await userService.updateUser(Number(id), name, email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await userService.deleteUser(Number(id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const sendResetLink = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const link = await userService.sendResetPasswordLink(email);
    res.status(200).json(link);
  } catch (error: any) {
    res.status(200).json({ message: error.message });
  }
}


export const passwordResetWithToken = async (req: Request, res: Response) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        const link = await userService.resetPassword(token, newPassword);
        res.status(200).json(link);
        //res.status(200).json({ message: 'Password successfully reset' });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}


export const disableAccount = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const { status } = req.body;
      const disable = await userService.disableAccount(+id, status);
      res.status(200).json(disable);
      //res.status(200).json({ message: 'Password successfully reset' });
  } catch (error: any) {
      res.status(400).json({ message: error.message });
  }
}




import { Request, Response } from 'express';
import { BlogService } from '../services/blogService';

const blogService = new BlogService();
export const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = await blogService.createBlog(req.body);
    res.status(200).json(blog);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};



export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const users = await blogService.getAllBlogs();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await blogService.getBlogById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Blog = await blogService.updateBlog(Number(id), req.body);
    if (Blog) {
      res.json({status: 200, message: 'Blog data found', data: Blog });
    } else {
      res.json({status: 404, message: 'Blog not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const success = await blogService.deleteBlog(Number(id));
    if (success) {
      res.json({status: 200, message: 'Blog data delete successfully'});
    } else {
      res.json({status: 404, message: 'Blog not found' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};








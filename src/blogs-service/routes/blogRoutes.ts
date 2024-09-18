import { Router } from 'express';
import {
  createBlog,
  getBlogById,
  getAllBlogs,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController';

const router = Router();

router.post('/blogs', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;
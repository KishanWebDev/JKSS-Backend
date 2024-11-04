import express from 'express';
import { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from '../Controllers/blog.controller.js';
import { authMiddleware, adminMiddleware } from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getBlogPosts);
router.post('/', authMiddleware, adminMiddleware, createBlogPost);
router.put('/:id', authMiddleware, adminMiddleware, updateBlogPost);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBlogPost);

export default router;
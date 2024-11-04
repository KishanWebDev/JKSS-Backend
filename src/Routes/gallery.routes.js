import express from 'express';
import { getGalleryItems, addGalleryItem, deleteGalleryItem } from '../Controllers/gallery.controller.js';
import { authMiddleware, adminMiddleware } from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getGalleryItems);
router.post('/', authMiddleware, adminMiddleware, addGalleryItem);
router.delete('/:id', authMiddleware, adminMiddleware, deleteGalleryItem);

export default router;
import express from 'express';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../Controllers/course.controller.js';
import { authMiddleware, adminMiddleware } from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', authMiddleware, adminMiddleware, createCourse);
router.put('/:id', authMiddleware, adminMiddleware, updateCourse);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCourse);

export default router;
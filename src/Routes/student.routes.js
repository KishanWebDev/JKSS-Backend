import express from 'express';
import { getStudentInfo, getEnrolledCourses, enrollCourse, updateProgress } from '../Controllers/student.controller.js';
import { authMiddleware } from '../Middleware/auth.middleware.js';

const router = express.Router();

router.get('/info', authMiddleware, getStudentInfo);
router.get('/courses', authMiddleware, getEnrolledCourses);
router.post('/enroll', authMiddleware, enrollCourse);
router.put('/progress', authMiddleware, updateProgress);

export default router;
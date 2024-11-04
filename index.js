import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/DB/db.js';
import authRoutes from './src/Routes/auth.routes.js';
import courseRoutes from './src/Routes/course.routes.js';
import studentRoutes from './src/Routes/student.routes.js';
import galleryRoutes from './src/Routes/gallery.routes.js';
import contactRoutes from './src/Routes/contact.routes.js';
import blogRoutes from './src/Routes/blog.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blog', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
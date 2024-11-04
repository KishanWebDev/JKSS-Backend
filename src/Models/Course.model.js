import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  fees: { type: Number, required: true },
  syllabus: [{ type: String }],
  color: { type: String, default: 'blue' },
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
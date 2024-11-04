import User from '../Models/User.model.js';
import Enrollment from '../Models/Enrollment.model.js';

export const getStudentInfo = async (req, res) => {
  try {
    const student = await User.findById(req.userData.userId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getEnrolledCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ student: req.userData.userId }).populate('course');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;
    const newEnrollment = new Enrollment({
      student: req.userData.userId,
      course: courseId,
    });
    await newEnrollment.save();
    res.status(201).json({ message: 'Enrolled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { enrollmentId, progress } = req.body;
    const updatedEnrollment = await Enrollment.findByIdAndUpdate(
      enrollmentId,
      { progress },
      { new: true }
    );
    if (!updatedEnrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
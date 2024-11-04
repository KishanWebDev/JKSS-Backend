import Blog from '../Models/Blog.model.js';

export const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const createBlogPost = async (req, res) => {
  try {
    const newBlogPost = new Blog(req.body);
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateBlogPost = async (req, res) => {
  try {
    const updatedBlogPost = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteBlogPost = async (req, res) => {
  try {
    const deletedBlogPost = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
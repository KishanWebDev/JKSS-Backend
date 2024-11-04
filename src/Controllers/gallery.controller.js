import Gallery from '../Models/Gallery.model.js';

export const getGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.status(200).json(galleryItems);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addGalleryItem = async (req, res) => {
  try {
    const newItem = new Gallery(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteGalleryItem = async (req, res) => {
  try {
    const deletedItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.status(200).json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
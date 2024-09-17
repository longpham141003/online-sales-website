const ParentCategory = require('../../models/category/parentCategory.model.js');

const createParentCategory = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const image = req.file ? req.file.path : '';

    // Tạo mã danh mục tự động
    const count = await ParentCategory.countDocuments();
    const code = `DM${(count + 1).toString().padStart(4, '0')}`;

    const category = new ParentCategory({
      name,
      icon,
      image,
      code
    });

    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getParentCategories = async (req, res) => {
  try {
    const categories = await ParentCategory.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getParentCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ParentCategory.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateParentCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, icon } = req.body;
    const image = req.file ? req.file.path : '';
    const category = await ParentCategory.findByIdAndUpdate(id, { name, icon, image }, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteParentCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ParentCategory.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json({ message: 'Xóa danh mục thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getParentCategories,
  getParentCategory,
  createParentCategory,
  updateParentCategory,
  deleteParentCategory,
};

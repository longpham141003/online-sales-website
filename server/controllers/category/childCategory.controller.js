const ChildCategory = require("../../models/category/childCategory.model.js");

const createChildCategory = async (req, res) => {
  try {
    const { name, parent_id } = req.body;

    // Tạo mã danh mục tự động
    const count = await ChildCategory.countDocuments();
    const code = `DM${(count + 1).toString().padStart(4, '0')}`;

    const category = await ChildCategory.create({ name, parent_id, code });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChildCategories = async (req, res) => {
  try {
    const categories = await ChildCategory.find({})
      .populate({
        path: 'parent_id', // Tên trường chứa thông tin danh mục chính
        select: 'name code' // Chọn trường cần thiết từ danh mục chính
      });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ChildCategory.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateChildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parent_id } = req.body;
    const category = await ChildCategory.findByIdAndUpdate(id, { name, parent_id }, { new: true });
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteChildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await ChildCategory.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json({ message: 'Xóa danh mục thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChildCategoriesByParentId = async (req, res) => {
  try {
    const { parentId } = req.params;
    const childCategories = await ChildCategory.find({ parent_id: parentId });
    res.status(200).json(childCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChildCategories,
  getChildCategory,
  createChildCategory,
  updateChildCategory,
  deleteChildCategory,
  getChildCategoriesByParentId
};

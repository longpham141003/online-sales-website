const GrandchildCategory = require("../../models/category/grandchildCategory.model.js");

const createGrandchildCategory = async (req, res) => {
  try {
    const { name, parent_id, suppliers } = req.body;

    // Tạo mã danh mục tự động
    const count = await GrandchildCategory.countDocuments();
    const code = `DM${(count + 1).toString().padStart(4, '0')}`;

    const category = await GrandchildCategory.create({ name, parent_id, suppliers, code });
    // Sau khi tạo, bạn có thể tìm lại danh mục để lấy thông tin đầy đủ của nhà cung cấp
    const populatedCategory = await GrandchildCategory.findById(category._id).populate({
      path: 'suppliers',
      select: 'supplierCode name'
    });
    res.status(201).json(populatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGrandchildCategories = async (req, res) => {
  try {
    const categories = await GrandchildCategory.find({})
      .populate({
        path: 'parent_id', // Tên trường chứa thông tin danh mục phụ
        populate: {
          path: 'parent_id', // Đối tượng con chứa thông tin danh mục chính
          select: 'name code' // Chọn trường cần thiết từ danh mục chính
        }
      });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGrandchildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await GrandchildCategory.findById(id)
      .populate({
        path: 'suppliers',
        select: 'supplierCode name' // Lấy mã NCC và tên nhà cung cấp
      });
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGrandchildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parent_id, suppliers } = req.body;
    const category = await GrandchildCategory.findByIdAndUpdate(id, { name, parent_id, suppliers }, { new: true })
      .populate({
        path: 'suppliers',
        select: 'supplierCode name' // Lấy mã NCC và tên nhà cung cấp
      });
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGrandchildCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await GrandchildCategory.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: 'Danh mục không tồn tại' });
    }
    res.status(200).json({ message: 'Xóa danh mục thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByChildId = async (req, res) => {
  try {
    const { childId } = req.params;
    const grandchildCategories = await GrandchildCategory.find({ parent_id: childId })
      .populate({
        path: 'suppliers',
        select: 'supplierCode name' // Lấy mã NCC và tên nhà cung cấp
      });
    res.status(200).json(grandchildCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGrandchildCategories,
  getGrandchildCategory,
  createGrandchildCategory,
  updateGrandchildCategory,
  deleteGrandchildCategory,
  getByChildId
};

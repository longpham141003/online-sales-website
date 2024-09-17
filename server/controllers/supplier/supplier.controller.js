const Supplier = require("../../models/supplier/supplier.model.js");

// Lấy danh sách tất cả nhà cung cấp
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({});
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin chi tiết của một nhà cung cấp theo ID
const getSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      return res.status(404).json({ message: "Nhà cung cấp không tồn tại" });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo một nhà cung cấp mới với mã tự động
const createSupplier = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;

    // Tạo mã nhà cung cấp mới dựa trên tổng số nhà cung cấp hiện có
    const count = await Supplier.countDocuments();
    const supplierCode = `NCC${(count + 1).toString().padStart(3, '0')}`; // Tạo mã như NCC00001, NCC00002, ...

    const supplier = new Supplier({
      name,
      address,
      phone,
      email,
      supplierCode
    });

    await supplier.save();
    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin nhà cung cấp theo ID
const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });
    if (!supplier) {
      return res.status(404).json({ message: "Nhà cung cấp không tồn tại" });
    }
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa nhà cung cấp theo ID
const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findByIdAndDelete(id);
    if (!supplier) {
      return res.status(404).json({ message: "Nhà cung cấp không tồn tại" });
    }
    res.status(200).json({ message: "Xóa nhà cung cấp thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

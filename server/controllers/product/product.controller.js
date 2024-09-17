const Product = require('../../models/product/product.model');

// Lấy danh sách tất cả sản phẩm
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate('supplier', 'supplierCode name')
      .populate('danhMuc');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy chi tiết sản phẩm theo ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
      .populate('supplier', 'supplierCode name')
      .populate('danhMuc');
    if (!product) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo sản phẩm mới (Chỉ admin mới có quyền)
const createProduct = async (req, res) => {
  try {
    const { tenSanPham, danhMuc, supplier, giaTienCu, giaTienHienTai, trangThai, chiTietSanPham } = req.body;
    const image = req.file ? req.file.path : '';

    // Tạo mã sản phẩm tự động
    const count = await Product.countDocuments();
    const productCode = `SP${(count + 1).toString().padStart(3, '0')}`;

    const product = new Product({
      tenSanPham,
      danhMuc,
      supplier,
      giaTienCu,
      giaTienHienTai,
      trangThai,
      chiTietSanPham,
      image,
      productCode
    });

    await product.save();
    const populatedProduct = await product.populate('supplier', 'supplierCode name');
    res.status(201).json(populatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật sản phẩm theo ID (Chỉ admin mới có quyền)
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { tenSanPham, danhMuc, supplier, giaTienCu, giaTienHienTai, trangThai, chiTietSanPham } = req.body;
    const image = req.file ? req.file.path : '';

    const product = await Product.findByIdAndUpdate(id, {
      tenSanPham,
      danhMuc,
      supplier,
      giaTienCu,
      giaTienHienTai,
      trangThai,
      chiTietSanPham,
      image
    }, { new: true });

    if (!product) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Xóa sản phẩm theo ID (Chỉ admin mới có quyền)
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
    }
    res.status(200).json({ message: 'Xóa sản phẩm thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy sản phẩm theo danh mục con
const getProductsByGrandchildCategory = async (req, res) => {
  try {
    const { grandchildCategoryId } = req.params;
    const products = await Product.find({ danhMuc: grandchildCategoryId })
      .populate('danhMuc')
      .populate('supplier');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy sản phẩm theo nhà cung cấp
const getProductsBySupplier = async (req, res) => {
  try {
    const { supplierId } = req.params;
    const products = await Product.find({ supplier: supplierId })
      .populate('danhMuc')
      .populate('supplier');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByGrandchildCategory,
  getProductsBySupplier
};

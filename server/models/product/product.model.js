const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    tenSanPham: {
      type: String,
      required: [true, 'Vui lòng nhập tên sản phẩm']
    },
    danhMuc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'GrandchildCategory',
      required: [true, "Vui lòng nhập danh mục"]
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      required: [true, "Vui lòng nhập nhà cung cấp"]
    },
    giaTienCu: {
      type: Number,
      default: null
    },
    giaTienHienTai: {
      type: Number,
      required: [true, 'Vui lòng nhập giá tiền hiện tại']
    },
    trangThai: {
      type: String,
      enum: ['new', 'sale', ''],
      default: ''
    },
    chiTietSanPham: {
      type: String,
      required: [true, 'Vui lòng nhập chi tiết sản phẩm']
    },
    image: {
      type: String,
    },
    productCode: {
      type: String,
      unique: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên nhà cung cấp"]
    },
    address: {
      type: String,
      required: [true, "Vui lòng nhập địa chỉ nhà cung cấp"]
    },
    phone: {
      type: String,
      required: [true, "Vui lòng nhập số điện thoại nhà cung cấp"]
    },
    email: {
      type: String,
      required: [true, "Vui lòng nhập email nhà cung cấp"]
    },
    supplierCode: {
      type: String,
      unique: true, // Đảm bảo mã nhà cung cấp là duy nhất
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Supplier = mongoose.model('Supplier', SupplierSchema);
module.exports = Supplier;

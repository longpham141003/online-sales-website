const mongoose = require('mongoose');

const GrandchildCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên danh mục"]
    },
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ChildCategory'
    },
    suppliers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier'
    }],
    code: {
      type: String,
      unique: true,
      required: [true, "Vui lòng nhập mã danh mục"]
    }
  },
  {
    timestamps: true
  }
);

const GrandchildCategory = mongoose.model('GrandchildCategory', GrandchildCategorySchema);
module.exports = GrandchildCategory;

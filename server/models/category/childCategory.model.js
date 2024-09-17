const mongoose = require('mongoose');

const ChildCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên danh mục"]
    },
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ParentCategory'
    },
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

const ChildCategory = mongoose.model('ChildCategory', ChildCategorySchema);
module.exports = ChildCategory;

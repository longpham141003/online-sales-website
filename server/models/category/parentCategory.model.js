const mongoose = require('mongoose');

const ParentCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Vui lòng nhập tên danh mục"]
    },
    icon: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

const ParentCategory = mongoose.model('ParentCategory', ParentCategorySchema);
module.exports = ParentCategory;

const multer = require('multer');
const path = require('path');

// Cấu hình nơi lưu trữ file và cách đặt tên file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Thư mục lưu trữ file
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Cấu hình bộ lọc file để chỉ chấp nhận các file hình ảnh
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

// Khởi tạo `Multer` với cấu hình đã định nghĩa
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Giới hạn kích thước file là 5MB
  fileFilter: fileFilter
});

module.exports = upload;
  
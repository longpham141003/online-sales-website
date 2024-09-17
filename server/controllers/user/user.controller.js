const mongoose = require('mongoose');
const User = require('../../models/user/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { hoTen, email, soDienThoai, username, password, role } = req.body;

    // Hàm tạo mã tài khoản tự động
    const generateUserCode = async () => {
        const count = await User.countDocuments();
        return `TK${(count + 1).toString().padStart(4, '0')}`;
    };

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userCode = await generateUserCode(); // Tạo mã tài khoản tự động

        const newUser = new User({
            hoTen,
            email,
            soDienThoai,
            username,
            password: hashedPassword,
            role,
            userCode // Thêm mã tài khoản vào
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không hợp lệ' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không hợp lệ' });
        }

        user.lastLogin = new Date();
        await user.save();

        const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
        const userInfo = {
            username: user.username,
            hoTen: user.hoTen,
            email: user.email,
            soDienThoai: user.soDienThoai,
            role: user.role // Thêm vai trò vào userInfo
        };
        res.status(200).json({ token, userInfo });
    } catch (error) {
        console.error('Lỗi trong hàm login:', error);
        res.status(500).json({ error: error.message });
    }
};

const facebookLogin = async (req, res) => {
    const user = req.user;
    const token = jwt.sign({ userId: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Lấy tất cả người dùng, bỏ qua trường password
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id, '-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUserInfo = async (req, res) => {
    const { _id } = req.user; // Dùng _id thay cho userId để đồng bộ với Mongoose
    const { hoTen, email, soDienThoai } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            { hoTen, email, soDienThoai },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            console.log('User not found with ID:', _id);
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User info updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user info:', error);
        res.status(500).json({ error: error.message });
    }
};

const updatePassword = async (req, res) => {
    const { _id } = req.user;
    const { currentPassword, newPassword, confirmPassword } = req.body;

    try {
        const user = await User.findById(_id);

        if (!user) {
            console.log('User not found in updatePassword');
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'New password and confirm password do not match' });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    register, 
    login, 
    facebookLogin, 
    getAllUsers, 
    getUserById, 
    deleteUser, 
    updateUserInfo, 
    updatePassword 
};

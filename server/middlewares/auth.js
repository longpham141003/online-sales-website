const jwt = require('jsonwebtoken');
const User = require('../models/user/user.model');

const auth = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Please authenticate.' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret'); // Đảm bảo 'your_jwt_secret' là đúng
        console.log('Decoded token:', decoded); // Debug log
        const user = await User.findById(decoded.userId);

        if (!user) {
            console.log('User not found with ID:', decoded.userId);
            return res.status(401).json({ message: 'Please authenticate.' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        auth,
        (req, res, next) => {
            if (!roles.length || roles.includes(req.user.role)) {
                return next();
            }
            return res.status(403).json({ message: 'Forbidden' });
        }
    ];
};

module.exports = { auth, authorize };

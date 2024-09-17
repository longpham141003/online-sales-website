const express = require('express');
const passport = require('../../middlewares/passport');
const router = express.Router();
const { register, login, facebookLogin, getAllUsers, getUserById, deleteUser, updateUserInfo, updatePassword } = require('../../controllers/user/user.controller.js');
const { auth, authorize } = require('../../middlewares/auth.js');

router.post('/register', register);
router.post('/login', login);
router.post('/facebook-login', passport.authenticate('facebook-token', { session: false }), facebookLogin);
router.get('/all', auth, authorize('admin'), getAllUsers);
router.get('/:id', auth, authorize(['admin', 'user']), getUserById);
router.delete('/:id', auth, authorize('admin'), deleteUser);
router.put('/update-info', auth, updateUserInfo);
router.put('/update-password', auth, updatePassword);

module.exports = router;

const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/user/user.model');

passport.use(new FacebookTokenStrategy({
    clientID: '499553345790915',
    clientSecret: '943366d32f362da45c3929b56a34ece0'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ facebookId: profile.id });

        if (!user) {
            user = new User({
                facebookId: profile.id,
                hoTen: profile.displayName,
                email: profile.emails[0].value,
                username: profile.id,
                password: 'facebook',
                role: 'user'
            });
            await user.save();
        }

        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
}));

module.exports = passport;

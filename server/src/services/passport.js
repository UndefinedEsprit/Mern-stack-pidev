const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('../models/user');
//const keys = require('../config/keys');

//Pull out User data out of mongoose
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
            clientID: "124912599864-6alr1e8s29fo1qn8ehfu2akmkdqhc183.apps.googleusercontent.com",
            clientSecret: "r4sjSW_EkeB0MmKYANiavLUg",
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async(accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                done(null, existingUser);
            }

            const user = await new User({ googleId: profile.id }).save()
            done(null, user);
        }
    ));
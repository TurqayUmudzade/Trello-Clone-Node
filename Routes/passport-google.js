const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


passport.use(new GoogleStrategy({
        clientID: "51815229475-3hvb97sms1mfm2otav5tu9fhmdg7sbg4.apps.googleusercontent.com",
        clientSecret: "t7xT7SMY0w75JSNMT_e-d4B0",
        callbackURL: "http://localhost:3000/google/callback",
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function(err, user) {
        //     return done(err, user);
        // });
        return done(null, profile)
    }
));
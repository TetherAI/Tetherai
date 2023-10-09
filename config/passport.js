const passport = require("passport")
const {Strategy} = require("passport-local")

passport.use(
    new Strategy({usernameField: "email"}, async (email, password, done) => {

        try {
            const user = await User.findOne({email})
            if (!user) {
                return done(null, false, {
                    message: "email not registered.",
                })
            }

            const isMatch = password === user.password
            if (isMatch) {
                return done(null, user) //req.user
            } else {
                return done(null, false, {
                    message: "email and password aren`t match.",
                })
            }
        } catch (err) {
            return true
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

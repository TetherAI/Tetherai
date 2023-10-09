const express = require("express")
const bodyParser = require("body-parser")
const passport = require("passport")
const session = require("express-session")

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

//* Passport Configuration
require("./config/passport")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

//* Session
app.use(
    session({
        secret: "secret",
        cookie: {maxAge: 2 * 60 * 60 * 1000},
        resave: false,
        saveUninitialized: false,
    })
)

//* Passport
app.use(passport.initialize())
app.use(passport.session())

app.use(authRoutes)
app.use('/users/', userRoutes)
app.use('/admin/', adminRoutes)

const Port = 10
app.listen(Port, () => console.log(`Server started on port ${Port}...`))

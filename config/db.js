const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB

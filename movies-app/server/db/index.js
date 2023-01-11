require('dotenv').config()
const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGOOSE_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
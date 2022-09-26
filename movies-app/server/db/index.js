const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://gremlin:mKKljCSIIJCsh4TX@cluster0.0kvdszb.mongodb.net/test', { useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
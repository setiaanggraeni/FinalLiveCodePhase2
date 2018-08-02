const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String
})

const user = mongoose.model('Users', UserSchema)

module.exports = user
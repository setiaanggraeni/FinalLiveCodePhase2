const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const ArticleSchema = new Schema({
    title: String,
    content: String,
    category: String,
    author: {type: Schema.Types.ObjectId, ref: 'Users'}
})

const user = mongoose.model('Articles', ArticleSchema)

module.exports = user
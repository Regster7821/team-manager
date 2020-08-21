const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: String,
    quote: String
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

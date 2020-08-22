const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
    type: String,
        required: [
            true,
            "Name is required"
    ]},
    quote: {
        type: String,
        required: [
            true,
            "A quote is required"
    ]},
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;

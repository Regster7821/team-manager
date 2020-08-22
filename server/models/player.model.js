const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
    type: String,
        required: [
            true,
            "Name is required"
    ]},
    position: {
        type: String,
        required: [
            true,
            "A position is required"
    ]},
    status: {
        type: String,
        required: [
            true,
            "A status is required"
    ]},
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;

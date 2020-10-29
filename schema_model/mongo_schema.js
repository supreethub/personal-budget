const mongoose = require("mongoose");

const pbSchema = new mongoose.Schema({
    budget: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    }
}, {collection: 'pbDB'})

module.exports = mongoose.model('pbDB', pbSchema)
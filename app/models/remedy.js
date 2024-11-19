const mongoose = require('mongoose');

const remedySchema = new mongoose.Schema({
    symptom: { type: String, required: true },
    name: { type: String, required: true },
    usage: { type: String, required: true }
});

module.exports = mongoose.model('Remedy', remedySchema); 





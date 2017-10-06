
const mongoose = require('mongoose');

const DragonSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 45, minlength: 3 },
    about: { type: String, required: true, maxlength: 255, minlength: 3 },
    species: { type: String, required: true, maxlength: 100, minlength: 3 }
}, { timestamps: true });

const Pack = mongoose.model('Pack', DragonSchema);

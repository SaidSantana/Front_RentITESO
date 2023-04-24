const { Schema, model } = require('mongoose');

const espacioSchema = new Schema({  
    nombre: { type: String },
    status: { type: String },
    image: { type: String },
    stock: {type: Number }
});

module.exports = model('espacios', espacioSchema);
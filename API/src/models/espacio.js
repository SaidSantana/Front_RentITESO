const { Schema, model } = require('mongoose');

const espacioSchema = new Schema({  
    nombre: { type: String },
    status: { type: String },
    descripción: { type: String }
});

module.exports = model('espacios', espacioSchema);
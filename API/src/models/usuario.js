const {Schema, model} = require('mongoose');

const now = new Date();

const usuarioSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type: String},
    password: {type: String},
    rol: {type: String},
    image: {type: String},
    date: {type: Date, default: now}
});

module.exports = model('usuarios',usuarioSchema);

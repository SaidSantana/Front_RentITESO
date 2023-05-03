const {Schema, model} = require('mongoose');

const now = new Date();

const usuarioSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type: String},
    password: {type: String},
    rol: {type: String, default: 'Usuario'},
    image: {type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Logo_ITESO_normal.jpg'},
    date: {type: Date, default: now}
});

module.exports = model('usuarios',usuarioSchema);

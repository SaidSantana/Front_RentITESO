const {Schema, model} = require('mongoose');

const now = new Date();

const usuarioSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type: String},
    password: {type: String},
    rol: {type: String, default: 'Usuario'},
    image: {type: String, default: 'https://seeklogo.com/images/I/iteso-logo-F97B48CC66-seeklogo.com.png'},
    date: {type: Date, default: now}
});

module.exports = model('usuarios',usuarioSchema);

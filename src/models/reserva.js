const { Schema, model, default: mongoose } = require('mongoose');

const reservaSchema = new Schema({  
    nombre: { type: String },
    img: { type: String },
    fecha: { type: Date },
    hora: { type: String },
    cantidad: {type: Number },
    id_user: {type: String}
});

module.exports = model('reservas', reservaSchema);
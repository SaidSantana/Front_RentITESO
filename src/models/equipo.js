const { Schema, model } = require('mongoose');

const equipoSchema = new Schema({  
    //_id: { type: Schema.Types.ObjectId },
    nombre: { type: String },
    status: { type: String },
    cantidad: { type: Number },
    //imagen
    descripción: { type: String }
});

module.exports = model('equipos', equipoSchema);
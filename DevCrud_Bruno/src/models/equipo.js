const { Schema, model } = require('mongoose');

const equipoSchema = new Schema({  //Modificar el esquema 
    //_id: { type: Schema.Types.ObjectId },
    title: { type: String },
    description: { type: String},
    status: { type: String, default: 'new' },
    Date: { type: Date, default: Date.now }
});

module.exports = model('equipos', equipoSchema);
const {Schema, model} = require('mongoose');

const tokenSchema = new Schema({
    token: {type: String},
    userId: {type: String}
});


module.exports = model('sesiones', tokenSchema);

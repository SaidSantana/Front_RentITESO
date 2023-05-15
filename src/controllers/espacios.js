const Espacio = require('./../models/espacio');

class ControladorEspacios{
    static listar(req, res){
        Espacio.find({}, null, { collection: 'espacios' }).lean() 
            .then(espacios => {
                res.send(espacios);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static consultarId(req, res){
        Espacio.findById(req.params.id).lean()
            .then(espacio => {
                res.send(espacio);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
    
    static postEspacio(req, res){
        console.log(req.body);
        const espacio = new Espacio({ 
            nombre: req.body.nombre,
            status: req.body.status,
            image: req.body.image,
            stock: req.body.stock
        });
        espacio.save()
            .then(espacioGuardado => {
                res.send(espacioGuardado);
            })
            .catch(err => {
                res.sendStatus(400);
            });
    }

    static putEspacio(req, res){
        Espacio.findByIdAndUpdate(req.params.id, req.body).lean()
            .then(espacio => {
                res.send(espacio);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static deleteEspacio(req, res){
        Espacio.findByIdAndDelete(req.params.id)
            .then(espacio => {
                res.send("Espacio " + espacio.nombre + "eliminado.");
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
}

module.exports = ControladorEspacios;
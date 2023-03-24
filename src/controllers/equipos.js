const Equipo = require('./../models/equipo');

class ControladorEquipos{
    static listar(req, res){
        Equipo.find({}, null, { collection: 'equipos' }).lean() 
            .then(equipos => {
                res.send(equipos);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static consultarId(req, res){
        Equipo.findById(req.params.id).lean()
            .then(equipo => {
                res.send(equipo);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }    

    static postEquipo(req, res){
        //console.log(req.body); pendienteeeeeeeeeee
        const equipo = new Tarea({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            Date: req.body.Date
        });
        equipo.save()
            .then(equipoGuardado => {
                res.send(equipoGuardado);
            })
            .catch(err => {
                res.sendStatus(400);
            });
    }

    static putEquipo(req, res){
        Equipo.findByIdAndUpdate(req.params.id, req.body).lean()
            .then(equipo => {
                res.send(equipo);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static deleteEquipo(req, res){
        Equipo.findByIdAndDelete(req.params.id)
            .then(equipo => {
                res.send(equipo);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
}

module.exports = ControladorEquipos;
const Reserva = require('./../models/reserva');

class ControladorReservas{
    static consultarId(req, res){
        Reserva.find(req.params.id).lean()
            .then(espacio => {
                res.send(espacio);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
    
    static postReserva(req, res){
        console.log(req.body);
        const reserva = new Reserva({ 
            nombre: req.body.nombre,
            img: req.body.img,
            fecha: req.body.fecha,
            hora: req.body.hora,
            cantidad: req.body.cantidad,
            id_user: req.body.id_user
        });
        reserva.save()
            .then(reservaGuardado => {
                res.send(reservaGuardado);
            })
            .catch(err => {
                res.sendStatus(400);
            });
    }

    static deleteReserva(req, res){
        Reserva.findByIdAndDelete(req.params.id)
            .then(reserva => {
                res.send("Reserva " + reserva.nombre + "eliminado.");
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
}

module.exports = ControladorReservas;
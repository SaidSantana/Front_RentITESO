const Usuario = require('./../models/usuario');

class userController{

    static getUsers(req, res){
        Usuario.find({}).lean({})
            .then(users => {
                res.send(users);
            })
            .catch(err => res.sendStatus(400));
    }

    static getUser(req, res){
        Usuario.findById(req.params.id).lean({})
            .then(user => res.status(200).send(user))
            .catch(err => res.sendStatus(400));
    }

    static createUser(req, res){
        const newUser = new Usuario(req.body);
        Usuario.create(newUser)
            .then(user => res.send(user))
            .catch(err => res.send(err));
    }

    static deleteUser(req, res){
        Usuario.findByIdAndDelete(req.params.id)
            .then(user => res.send({message:"Usuario "+user.nombre+" eliminado"}))
            .catch(err => res.status(400).send(err));
    }

    static updateUser(req, res){
        Usuario.findByIdAndUpdate(req.params.id,req.body,{new:true})
            .then(user => res.send({message: "Usuario "+user.nombre+" actualizado"}))
            .catch(err => res.status(400).send(err));
    }

}

module.exports = userController;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Usuario = require('./../models/usuario');
const Token = require('./../models/token');
require('dotenv').config();


class userController{

    static logIn(req,res){
        Usuario.findOne({email: req.body.correo})
        .then(usuario => {
            if(!usuario)
               res.status(401).send({msg: "Incorrecto"});
            //console.log(usuario);
            bcrypt.compare(req.body.password, usuario.password)
            .then(passwordOk => {
                if(!passwordOk){
                    res.status(401).send({msg: "Incorrecto"})
                }
                const data = {
                    _id: usuario._id,
                    email: usuario.email
                }
                const key = process.env.PRIVATE_KEY;
                const token = jwt.sign(data,key);

                Token.create({
                    token,
                    userId: usuario._id
                }).then(tokenResponse => {
                    res.send({
                        token
                    })
                })
            })
        })
        .catch(err => console.log(err));
    }

    static registro(req,res){
        console.log(req.body);
        bcrypt.hash(req.body.password,10).then(hashedPassword => {
            Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: hashedPassword
            })
        })
        .then(res.send({msg: "Gracias por registrarse"}))
        .catch(err => {
            res.status(400).send(err);
        })


        // Usuario.create({
        //     nombre: req.body.nombre,
        //     apellido: req.body.apellido,
        //     email: req.body.email,
        //     password: jwt.sign({a:1}, req.body.password)
        // })
        // .then(() => res.send({msg: "Gracias por registrarte"}))
        // .catch((err) => {
        //     res.status(400).send(err);
        // })
    }

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
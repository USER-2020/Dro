'use strict'
var Contact = require('mongoose');
var controller = {

    home: function (req, res){
        return res.status(200).send({
            message: "I'm home"
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: "i'm the methody or accion test of contact's controller"
        });
    },

    saveContact: function (req, res){
        var contact = new Contact();

        return res.status(200).send({
            message: "Metodo saveContacts"
        })
    },

    getContact: function(req, res){
        var contactId = req.params.id;
        if(contactId == null)return res.status(404).send({message:'El proyecto no existe.'});
        Contact.findById(contactId,(err, contact)=>{
            if(err)return res.status(500).send({message: 'Error al devolver los datos. '});
            if(!contact)return res.status(404).send({message: 'El proyecto no existe.'});
            return res.status(200).send({
                contact
            });
        });
    },

    getContacts: function (req, res){
        Contact.find({}).exec((err, contacts) =>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos'});
            if(!contacts)return res.status(404).send({message: 'No hay proyectos que mostrar'});
            return res.status(200).send({contacts});
        })
    },

    updateContact: function (req, res){
        var contactId = req.params.id;
        var update = req.body;

        Contact.findByIdAndUpdate(contactId, update, {new:true}, (err, contactUpdate)=>{
            if(err) return res.status(500).send({message:'Error añl actualizar'});
            if(!contactUpdate)return res.status(404).send({message:'No existe el proyecto aun...'});
            return res.status(200).send({
                contact: contactUpdate
            });
        });
    },

    deleteContact: function(req, res){
        var contactId = req.params.id;

        Contact.findByIdAndRemove(contactId, (err, contactRemove)=>{
            if(err)return res.status(500).send({message:'No se ha podido borrar el contacto'});
            if(!contactRemove)return res.status(404).send({message: 'No existe el contacto que quieres eliminar. '});
            return res.status(200).send({
                contact: contactRemove
            });
        });
    },

    uploadImg: function(req, res){
        var contactId = req.params.id;
        var fileName = 'Imagen no subida';

        if(req.files){

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];

            Contact.findByIdAndUpdate(contactId, { image :fileName},(err, contactUpdate)=>{
                if(err)return res.status(500).send({message: 'La imaegn no se ha subido'});

                if(!contactUpdate) return res.status(404).send({message: 'el Contacto no existe...'});
                
                return res.status(200).send({
                    contact: contactUpdate
            });
            
            });
            
        }else{
            return res.status(200).send({
                message: fileName
            });
        };
    }
};

module.exports = controller;
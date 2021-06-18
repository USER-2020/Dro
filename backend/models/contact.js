'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = Schema({
    name: String,
    description: String,
    category: String,
    cellphone: Number,
    year: Number,
});

module.exports = mongoose.model('Contact', ContactSchema);
// contacts --> Guarda los documentos en la colección
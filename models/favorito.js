var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
    titulo:String,
    descripcion:String,
    url:String
});

module.exports = mongoose.model('Favorito',FavoritoSchema);
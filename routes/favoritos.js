var express = require('express')

var FavoritosController = require('../controllers/favoritos.js')

var api = express.Router()


api.get('/saludar/:nombre?',FavoritosController.saludar);
api.get('/favorito/:id',FavoritosController.getFavorito);
api.post('/addFavorito/',FavoritosController.addFavorito);
module.exports = api;

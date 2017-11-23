var Favorito = require('../models/favorito')

function saludar (req,res){
    var mensaje =''
    
    if (req.params.nombre){
        mensaje= req.params.nombre;
    }
    else{
        mensaje = "Sin nombre"
    }
    
    res.send("<html><head><title>Probanding</title></head><body><h1>Hola"+mensaje+"</h1></body></html>").status(200)
}

function getFavorito(req,res){

    var idFavorito= req.params.id;
    res.send({idFavorito: idFavorito}).status(200);
}

function addFavorito(req,res){
    var fav= new Favorito();

    var params = req.body;

    fav.titulo=params.titulo;
    fav.descripcion=params.descripcion;
    fav.url=params.url;

    fav.save(function(err,favoritoGuardado){
        if(err){
            res.status(500).send({resultado:"error"})
        }
        else{
            res.status(200).send(favoritoGuardado)
        }
    });
}

function editFavorito(req,res){

}

function removeFavorito(req,res){

}

module.exports = { saludar, getFavorito,addFavorito}

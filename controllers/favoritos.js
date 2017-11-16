
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

}

function editFavorito(req,res){

}

function removeFavorito(req,res){

}

module.exports = { saludar, getFavorito}

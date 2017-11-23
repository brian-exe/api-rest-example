
var port = 5000

app = require('./app.js');

var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/favoritos',{ useMongoClient: true } ,function(err,res){
	if (err){
		throw err	
	}
	else{
		console.log("Conexion correcta!");
		app.listen(port,function(){
		    console.log('Corriendo! holaaaaa')
		});	
	}
});

//var dbConnection = require ('../../config/dbConnection');

module.exports = function(app){

   app.get('/noticias', function(req, res){

    	var connection = app.config.dbConnection();
    
        connection.query('SELECT * FROM noticias where id_noticia = 3 ', function(error, result){
            res.render("noticias/noticia", { noticia : result });
        });
    });
};
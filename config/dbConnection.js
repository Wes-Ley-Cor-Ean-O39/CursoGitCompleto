var  mysql = require('mysql');

var connMysql = function (){
  console.log('Conexão com bd foi estabelecida')
   return  mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'portal_noticias'
        });

}

module.exports = function () {
	console.log('O autoload carregou o módulo de conexão com bd');
	return connMysql; 
}



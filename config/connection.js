var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'borgar_db'
})
//heroku hook time
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'borgar_db'
    });
};



connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadId);
});

module.exports = connection;
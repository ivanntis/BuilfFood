/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var QueryMongo =require('../dto/QueryMongo');
var dataBase ="mongoDB";
module.exports = {
    setDataBase: function(dBase){
        dataBase= (dBase==="")?dataBase:dBase;
    },
    getDataQuery:  function(query, callback){
        
        if(dataBase ==='mysql'){

            var mysql      = require('mysql');
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : '',
                port     : '3306'
              });
            connection.connect();
            connection.query(query, function(err, rows) {
                if (err) throw err;      
                callback(rows);
            });
            connection.end();
        }else{       
            var mongodb = require('mongodb');

            var server = new mongodb.Server("172.16.200.3", 27017, {});

            var BuilfFood = new mongodb.Db('BuilfFood', server, {});
            QueryMongo=query;
            BuilfFood.open(function (error, client) {
              if (error) throw error;
              var collection = new mongodb.Collection(client, QueryMongo.docMongo);
              collection.find(QueryMongo.consultMongo).toArray(function(err, docs) {
                console.log(docs);
                });
              });
        }
    }
};//);



//function fetchItens(userId, callback){
//
//    var arr = new Array;
//    var result;
//    var connection = mysql.createConnection({
//      host     : 'localhost',
//      user     : 'XXXXXX',
//      password : 'XXXXXX',
//      database : 'XXXXXX',
//    });
//
//    connection.connect();
//    connection.query('SELECT * from itens', function(err, rows, fields){
//         if (err) throw err;
//         arr = rows.slice()
//         callback(arr);
//    });
//    connection.end();
//}
//
//fetchItens(someId, function(arr){
//   // use arr
//});
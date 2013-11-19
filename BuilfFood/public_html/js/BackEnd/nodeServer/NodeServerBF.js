/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');

var NodeDataBaseBF =require('./NodeDataBaseBF');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  NodeDataBaseBF.setDataBase("mysql");
  NodeDataBaseBF.getDataQuery("SELECT * FROM test.CONTRY",function(result){       
        res.end('<h1> el resultado es: '+result[0].CONTRY_NAME+'<\h1>');
       
   });

//  res.end('<h1> el resultado es:<\h1>');
}).listen(3080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3080/');



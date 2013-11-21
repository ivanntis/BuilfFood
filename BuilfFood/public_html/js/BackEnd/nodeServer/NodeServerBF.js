/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var http = require('http');
var connect=require('connect');
var NodeDataBaseBF =require('./NodeDataBaseBF');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  
//  NodeDataBaseBF.setDataBase("mysql");
//  NodeDataBaseBF.getDataQuery("SELECT * FROM test.CONTRY",function(result){       
//  res.end('<h1> el resultado es: '+result[0].CONTRY_NAME+'<\h1>');
//       
//   });

//  res.end('<h1> el resultado es:<\h1>');
//}).listen(3080, '127.0.0.1');
var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('/Users/ivanricardopenasierra/NetBeansProjects/BuilfFood/BuilfFood/public_html'))
  .use(function(req, res,next){
      NodeDataBaseBF.setDataBase("mysql");
      NodeDataBaseBF.getDataQuery("SELECT * FROM test.CONTRY",function(result){  
         console.log(result[0].CONTRY_NAME);
      });
    //res.end('hello world\n');
     res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
  })
 .listen(3080);
console.log('Server running at http://127.0.0.1:3080/');
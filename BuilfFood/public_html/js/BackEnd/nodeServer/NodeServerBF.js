/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var NodeDataBaseBF =require('./NodeDataBaseBF');

var express = require('express');
var app = express()
  .use(express.logger('dev'))
  .use(express.static("/Users/ivanricardopenasierra/NetBeansProjects/BuilfFood/BuilfFood/public_html"))
  .use(function(req, res,next){

      NodeDataBaseBF.setDataBase("mysql");
      NodeDataBaseBF.getDataQuery("SELECT * FROM test.CONTRY",function(result){  
         console.log(result[0].CONTRY_NAME);
      });   
  })
 .listen(3080);
console.log('Server running at http://127.0.0.1:3080/');
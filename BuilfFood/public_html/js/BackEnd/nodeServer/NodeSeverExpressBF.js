/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var app = express()


//.all('*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();
// })

  .use(express.logger('dev'))
  .use(express.static("C:\\Users\\ipena\\Documents\\BuildFood\\BuilfFood\\BuilfFood\\public_html"))
  .use(function(req, res,next){
    
   
  })
 .listen(3080);
console.log('Server running at http://127.0.0.1:3080/');
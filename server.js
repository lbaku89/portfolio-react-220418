var express = require('express');
var projectlink = require('./routes/router');
var app = express();

app.listen(5000,function(){
  console.log("localhost:5000");
});

app.use('/mylink',projectlink);

app.get('/',function(req,res){
  res.send("안녕");
});
var app = require('express')()
var api = require('./api/api');

// node server.js entry point Port 8080 
app.listen(8080,function(){
  console.log("localhost:8080");
});

// 8080/api 로 접속시 api로 연결 
app.use('/api',api)


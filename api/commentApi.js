var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);

var mybatisMapper = require('mybatis-mapper')
mybatisMapper.createMapper(['./mapper/mapper.xml'])
var format = { language : 'sql', indent : '  '}

router.use(express.urlencoded({ extended : true }));
router.use(express.json())

router.post('/',(req, res) => {
  var crudType = req.query.crud
  console.log("req.query.crud:"+req.query.crud);
  var params = req.body
  console.log("req.body:"+req.body)
  console.log("req.body.body:"+req.body.body)
  if(crudType=="insert"){
      var paramsobj = JSON.parse(params.body);
  }else{
    console.log("var paramsobj = params.body;");
    var paramsobj = params.body;
  }

  var query = mybatisMapper.getStatement('reactPortfolioNamespace', paramsobj.crudId,paramsobj,format );
  console.log('쿼리문:', query);
  
  pool.getConnection(function(err,connection){
    if(err) throw console.log("getConnection error :" + err)
    connection.query(query, (error,result)=>{
      if(error) throw "query문 전달 했지만 DB로부터 DATA전달 실패:"+error +result;
      else{
        console.log(paramsobj.crudId +"성공" )
        res.send(result);
      }
    })
    connection.release();
  })
})

module.exports = router;

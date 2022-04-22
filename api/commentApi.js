var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);

var mybatisMapper = require('mybatis-mapper')
mybatisMapper.createMapper(['./mapper/introduceSQL.xml'])
var format = { language : 'sql', indent : '  '}

router.use(express.urlencoded({ extended : true }));
router.use(express.json())

router.post('/',(req, res) => {

  var params = req.body
  var paramsobj = JSON.parse(params.body);
  var query = mybatisMapper.getStatement(paramsobj.nameSpace, paramsobj.crudId,paramsobj,format );
  console.log('쿼리문:', query);
  
  pool.getConnection(function(err,connection){
    if(err) throw console.log("getConnection error :" + err)
    connection.query(query, (error,result)=>{
      if(error) throw "query문 전달 했지만 DB로부터 DATA전달 실패:"+error +result;
      else{
        console.log(paramsobj.crud +"성공" )
        res.send("node -> react data 전송 success")
      }
    })
    connection.release();
  })
})

module.exports = router;

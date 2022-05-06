var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig);

var mybatisMapper = require('mybatis-mapper')
mybatisMapper.createMapper(['./mapper/mapper.xml'])
var format = { language : 'sql', indent : '  '}

// url code화 진행
router.use(express.urlencoded({ extended : true }));
// api 통신간 json 문법 사용
router.use(express.json())

// post 방식으로 request 받고 resend 진행  
router.post('/',(req, res) => {

  var crudType = req.query.crud
  //확인 code 
  console.log("req.query.crud:"+req.query.crud);
  var params = req.body
  // 확인 code
  console.log("req.body:"+req.body)
  console.log("req.body.body:"+req.body.body)
  
  // insert인 경우 form 에서 받은 data json 형태로 parsing 
  if(crudType=="insert"||crudType=="update"){
      var paramsobj = JSON.parse(params.body);
  }else{
    console.log("var paramsobj = params.body;");
    var paramsobj = params.body;
  }

  // ./mapper query문 생성 
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

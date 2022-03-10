var express = require('express');
var router = express.Router();

router.get('/myport', function(req,res){
  res.send({'navidb':'["나의소개","나의작품","사전면접"]'});
})



router.get('/portfolio', function(req,res){
  res.send('작품들')
})

router.get('/preinterview', function(req,res){
  res.send('사전면접')
})

router.get('/contact', function(req,res){
  res.send('contact')
})

router.get('/react',function(req,res){
  res.send('리액트가 쓸거')
})
module.exports = router;

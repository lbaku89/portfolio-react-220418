import React, { Fragment } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'


export default function Comment() {

const submitComment = async() => {

  const[message, setMessage] = useState('');

  var formData = decodeURIComponent($("[name=CommetForm]").serialize());
  // Form Data 담은 후 Data Decode 진행

  var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
      formDataJson = '{' + Json_data.replace(/=/gi, '\":\"') + '}'
  // Decode된 Form Data Json화 
  try{
    axios.post('/api?type='+apiType,{
      header:{ "Content-Type":"application/json"},
      body:formDataJson
    })
    .then(
      (result)=>{
        if(result.dat=='success'){setMessage('노드에 data insert완료')}
      }
    )
    .catch((error)=>{
      setMessage('query혹은 xml접속 문제')
    })
  }
  catch(error){
    (error)=>{
      setMessage('')  
    }
  }
}

  return (
    <div id="CommentComponentWrap" className='container-lg'>
      <Form name="CommetForm">
        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" minlength="4" maxlength="10" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>게시글 비밀번호</Form.Label>
          <Form.Control type="password" minlength="4" maxlength="10" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Label>남기고 싶은말을 적어주세요</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>{submitComment()}}>
          등록하기
        </Button>
      </Form>
    </div>
  )
}

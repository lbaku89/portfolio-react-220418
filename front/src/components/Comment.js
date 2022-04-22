import React, { Fragment } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'


export default function Comment() {

const[message, setMessage] = useState('');
useEffect((e)=>{
  submitComment()
},[message])

const submitComment = async() => {

  

  var formData = decodeURIComponent($("[name=CommetForm]").serialize());
  // Form Data 담은 후 Data Decode 진행

  var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
      formDataJson = '{' + Json_data.replace(/=/gi, '\":\"') + '}'
  // Decode된 Form Data Json화 
  try{
    axios.post('/commentApi?type='+commentInsert,{
      header:{ "Content-Type":"application/json"},
      // HTTP DATA통신 DATA TYPE 설정 
      body:formDataJson
    })
    .then(
      (result)=>{
        if(result.data=='success'){setMessage('노드에 data insert완료')}
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
          <Form.Group>
            <input type='hidden' name='crud' value="insert"/>
            <input type='hidden' name='nameSpace' value="commentMapper"/>
            <input type='hidden' name='crudId' value="insertComment" />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>닉네임</Form.Label>
          <Form.Control name="wr_name" type="text"  minlength="4" maxlength="10" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>게시글 비밀번호</Form.Label>
          <Form.Control name="wr_password" type="password"  minlength="4" maxlength="10" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Label>남기고 싶은말을 적어주세요</Form.Label>
          <Form.Control name="wr_comment" as="textarea"  rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>{submitComment()}}>
          등록하기
        </Button>
      </Form>
    </div>
  )
}

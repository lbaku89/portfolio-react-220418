import React, { Fragment } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'
import $ from 'jquery'


export default function Comment() {




  const [commentList, commentListUpdate]= useState([])

  const openPrompt = () => {
    let promptObj = prompt ("비밀번호를 입력하세요","");
    return (promptObj);
  }

  const submitComment = async() => {
    // 유효성 검사 
    console.log("submitComment 시작 ")
    const fnValidate = () => {
      if(document.getElementsByName("wr_name")[0].value==""){return false};
      if(document.getElementsByName("wr_password")[0].value==""){return false};
      if(document.getElementsByName("wr_comment")[0].value==""){return false};
      return true;
    }

    if(fnValidate()){
      // Form Data 담은 후 Data Decode 진행
      var formData = decodeURIComponent($("[name=CommentForm]").serialize());

      // Decode된 Form Data Json화
      var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
          formDataJson = '{' + formDataJson.replace(/=/gi, '\":\"') + '}'
 
      try{
        axios.post('/commentApi?crud=insert',{
          header:{ "Content-Type":"application/json"},
          // HTTP DATA통신 DATA TYPE 설정 
          body:formDataJson
        })
        .then(
          res=>{
            console.log(res.data);
            console.log("commentInsert성공")
           
          })
        .catch((err)=>{
          console.log("query or xml 문제"+err)
        })
      }
      catch(err){
        console.log('서버연결안됨')
      }
    }
  }

  const commentDelete = async(no,password) =>{
    var inputValue = openPrompt()
    if(inputValue==password){
      try{
        axios.post("/commentApi?crud=delete",
        {
          header:{'Content-Type' : 'application/json'},
          body:{
            "no":no,
            "crudId":"commentDelete"}
        })
        .then(
          res=>{
            console.log("commentDelete res.data:", res.data)
            commentSelectFn();
          }

        )
        .catch(err=>{
          console.log("node에서 data react로 data반환 실패 :", err)
        })
      }
      catch(err){
        console.log("node로 data전달 실패", err)
      }
    }else if(inputValue==null){

    }else{
      alert("비밀번호가 틀렸습니다.")
    }
  }

  const commentSelectFn= async()=>{
    try{
      axios.post("/commentApi?crud=select",
      {
        header:{'Content-Type' : 'application/json'},
        body:{"crudId":"commentSelect"}
      })
      .then(
        res=>{
          console.log("commentSelect res.data:", res.data)
          commentListUpdate([...res.data])
        }
      )
      .catch(err=>{
        console.log("node에서 data react로 data반환 실패 :", err)
      })
    }
    catch(err){
      console.log("node로 data전달 실패", err)
    }
  }

  useEffect( ()=>{
    commentSelectFn();
  },[])

  return (
    <div id="CommentComponentWrap" className='container-lg mt-5 mb-5 gmarket'>
      <div className='p-2 d-flex align-items-center'>
        <img src="/img/AboutMe/mySketch.png" className="CommentMyIcon" alt="myIcon"/>   
        <h3 className='ms-2 mb-0'>잘 보셨나요?</h3>
      </div>
      <div className='row p-2'>
        <Form name="CommentForm" className='col-12 col-md-4 mb-5'>
            <Form.Group>
              <input type='hidden' name='crudId' value="commentInsert"/>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formNickname">
            {/* <Form.Label>닉네임</Form.Label> */}
            <Form.Control name="wr_name" type="text" minlength="2" maxlength="8" placeholder="닉네임" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            {/* <Form.Label>게시글 비밀번호</Form.Label> */}
            <Form.Control name="wr_password" type="password" minlength="2" maxlength="8" placeholder="게시글 비밀번호" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTextArea">
            {/* <Form.Label>남기고 싶은말을 적어주세요</Form.Label> */}
            <Form.Control name="wr_comment" as="textarea" rows={1} placeholder="남길말"/>
          </Form.Group>
          <Button variant="primary" className='buttonStyle1' type="submit" onClick={e=>{submitComment()}}>
            등록하기
          </Button>
        </Form>
        <div className='col-12 col-md-8'>
          <div>
            {commentList.map(
              (content)=>{
                return(
                  <>
                    <div className='d-flex justify-content-start p-2'>
                      <div className='col-2'>{content.wr_name}</div>
                      <div className='col-8'>{content.wr_comment}</div>
                      <div className='col-2 d-flex justify-content-end'>
                        <button onClick={e=>commentDelete(content.no,content.wr_password)} className='buttonStyle1 h-30px mt-0'>삭제</button>
                      </div>
                    </div>
                  </>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

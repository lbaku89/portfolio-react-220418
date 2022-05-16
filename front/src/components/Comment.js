import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Form, Button} from 'react-bootstrap'
import $ from 'jquery'
import Swal from 'sweetalert2'

export default function Comment() {


  const [commentList, commentListUpdate]= useState([])


  const submitComment = async() => {
    console.log("submitComment 시작 ")
    // 유효성 검사
    const fnValidate = () => {
      if(document.getElementsByName("wr_name")[0].value==""){
          document.getElementsByName("wr_name")[0].focus()
          Swal.fire({
            title: "닉네임을 입력하세요",
          })
          return false 
        };
      if(document.getElementsByName("wr_password")[0].value==""){
        document.getElementsByName("wr_password")[0].focus()
        Swal.fire({
          title: "패스워드를 입력하세요",
        })
         return false
      };
      if(document.getElementsByName("wr_comment")[0].value==""){
        document.getElementsByName("wr_comment")[0].focus()
        Swal.fire({
          title: "남길말을 적어주세요",
        })
         return false
      };
      return true;
    }
    if(fnValidate()){
      // Form Data 담은 후 Data Decode 진행
      var formData = decodeURIComponent($("[name=CommentForm]").serialize());

      // Decode된 Form Data Json화
      var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
          formDataJson = '{' + formDataJson.replace(/=/gi, '\":\"') + '}'
 
      try{
        axios.post('/api?crud=insert',{
          // HTTP DATA통신 DATA TYPE 설정 
          header:{ "Content-Type":"application/json"},
          //request.body.body에 formDataJons 담아 전송
          body:formDataJson
        })
        .then(
          res=>{
            console.log(res.data);
            
            Swal.fire('comment 작성완료!')
            //form data 초기화
            $('.form-control[name]').val('')
            //삭제된 comment 반영하여 새로운 comment list 화면에 노출
            commentSelectFn()
          })
        .catch((err)=>{
          Swal.fire({
            title: "query or xml 문제"+err,
          })
        })
      }
      catch(err){
        console.log('서버연결안됨')
      }
    }
  }

  //comment삭제 function
  const commentDelete = async(no,password) =>{
    Swal.fire({
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: '비밀번호를 입력하세요',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    }).then((inputValue)=>{
      //입력한 password가 client가 설정한 비밀번호와 일치시 comment삭제
      if(inputValue.value==password){
        try{
          axios.post("/api?crud=delete",
          {
            header:{'Content-Type' : 'application/json'},
            body:{
              "no":no,
              "crudId":"commentDelete"}
          })
          .then(
            res=>{
              console.log("commentDelete res.data:", res.data)
              //삭제된 commentlist 반영하는 function 실행
              commentSelectFn();
              Swal.fire('삭제완료')
            }
          )
          .catch(err=>{
            console.log("node에서 data react로 data반환 실패 :", err)
          })
        }
        catch(err){
          console.log("node로 data전달 실패", err)
        }
      }else if(inputValue.value===''){
        Swal.fire("비밀번호를 입력하세요.")
      }else{
        Swal.fire({
          title: "비밀번호가 틀렸습니다."
        })
      }
    })
  }

  //db에서 comment data 불러오는 fn
  const commentSelectFn= async()=>{
    try{
      axios.post("/api?crud=select",
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

  // rendering 될때 마다 db속 comment data update
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
        <Form name="CommentForm" className='col-12 col-md-4 mb-5' >
            <Form.Group>
              <input type='hidden' name='crudId' value="commentInsert"/>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formNickname">
            <Form.Control name="wr_name" type="text" placeholder="닉네임" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control name="wr_password" type="password" placeholder="게시글 비밀번호" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTextArea">
            <Form.Control name="wr_comment" as="textarea" rows={1} placeholder="남길말"/>
          </Form.Group>
          <Button variant="primary" className='buttonStyle1' onClick={e=>{submitComment()}}>
            등록하기
          </Button>
        </Form>
        <div className='col-12 col-md-8'>
          <div>
            {commentList.map(
              (content,i)=>{
                return(
                  <div className='d-flex justify-content-start p-2 commentWrap' key={"commentDiv" +i} >
                    <div className='col-2'>{content.wr_name}</div>
                    <div className='col-8'>{content.wr_comment}</div>
                    <div className='col-2 d-flex justify-content-end'>
                      <button onClick={e=>commentDelete(content.no,content.wr_password)} className='buttonStyle1 h-30px mt-0'>삭제</button>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

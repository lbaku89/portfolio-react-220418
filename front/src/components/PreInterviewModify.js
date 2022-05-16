import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate, Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery'
import Swal from 'sweetalert2';

export default function InterviewModify() {

  // 주소창 읽기 위해 params 인스턴스 생성
  let params = useParams();
  // 경로 바꾸기 위해 navigate instance 생성
  const navigate = useNavigate();
  
  const [selectedPreInterView, setSelectedPreInterView ] = useState([]) 

  const modifyPreInterviewFn = async() => {
    // 유효성 검사 
    console.log("modifyPreInterviewFn 시작 ")
    const fnValidate = () => {
      if(document.getElementsByName("interviewModifyQuestion")[0].value==""){
          document.getElementsByName("interviewModifyQuestion")[0].focus()
          Swal.fire("질문을 입력하세요")
          return false 
        };
      if(document.getElementsByName("interviewModifyAnswer")[0].value==""){
        document.getElementsByName("interviewModifyAnswer")[0].focus()
        Swal.fire("답변을 입력하세요")
         return false
      };
      return true;
    }

    if(fnValidate()){
      // Form Data 담은 후 Data Decode 진행
      var formData = decodeURIComponent($("[name=preInterviewModifyForm]").serialize());

      // Decode된 Form Data Json화
      var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
          formDataJson = '{' + formDataJson.replace(/=/gi, '\":\"') + '}'
      

      try{
        axios.post('/api?crud=update',{
          header:{ "Content-Type":"application/json"},
          // HTTP DATA통신 DATA TYPE 설정 
          body:formDataJson
        })
        .then(
          res=>{
            console.log(res.data);
            Swal.fire('질문수정 완료!')
            $('.form-control[name]').val('');
            // commentSelectFn();
            navigate('/admin')
          })
        .catch((err)=>{
          Swal.fire("query or xml 문제"+err,'params.no'+
          params.no)
        })
      }
      catch(err){
        console.log('서버연결안됨')
      }
    }
  }

  const selectedpreInterviewFn = async()=>{
    try{
      axios.post("/api?crud=select",
      {
        header:{'Content-Type' : 'application/json'},
        body:{"crudId":"selectedPreInterview", "no":params.no}
      })
      .then(
        res=>{
          console.log("commentSelect res.data:", res.data)
          setSelectedPreInterView([...res.data])
          document.getElementsByName("interviewModifyQuestion")[0].value = res.data[0].question
          document.getElementsByName("interviewModifyAnswer")[0].value = res.data[0].answer
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

  useEffect(()=>{
    selectedpreInterviewFn();
  },[])

  return (
  <div className='khysection1' id="preInterviewModifyWrap">
    <div className='container-md pt-5' id="PreInterviewWrap2">
        <div  className="d-flex justify-contents-center align-items-start sectionTitleBox">
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>Pre-Interview 수정중</h3>
        </div>
        <div className='selectedPreInterviewWrap m-auto'>
      {selectedPreInterView.map((content)=>{
        return(
          <Form name="preInterviewModifyForm">
            <Form.Group className="mb-3" controlId="formNickname">
              <input type='hidden' name='crudId' value="modifySelectedPreInterview"/>
              <input type='hidden' name='no' value={parseInt(params.no)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNickname">
              <Form.Label>인터뷰 질문</Form.Label>
              <Form.Control name="interviewModifyQuestion" type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTextArea">
              <Form.Label>인터뷰 답변</Form.Label>
              <Form.Control name="interviewModifyAnswer" as="textarea" rows={5}/>
            </Form.Group >
            <div className='d-flex align-items-center'>
              <Button className='buttonStyle2 fs-6' onClick={e=>{modifyPreInterviewFn()}}>
                수정완료
              </Button>
              <Link to="/admin" className='buttonStyle2 fs-6'>
                목록
              </Link>
            </div>
          </Form>
        )
           
      })}
      </div>
    </div>
  </div>
  )
}


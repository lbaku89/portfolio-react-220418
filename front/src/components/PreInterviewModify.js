import React from 'react'
import { useParams, useNavigate, Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function InterviewModify() {

  let params = useParams();
  const navigate = useNavigate();
    
  
  const interviewSelectFn= async()=>{
    try{
      axios.post("/commentApi?crud=select",
      {
        header:{'Content-Type' : 'application/json'},
        body:{"crudId":"preInterviewSelect", "no":params.no}
      })
      .then(
        res=>{
          console.log("commentSelect res.data:", res.data)
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

  console.log(params.no);
  return (
    <div id="preInterviewModifyDiv">
    <Form name="preInterviewModifyForm">
        <Form.Group>
          <input type='hidden' name='crudId' value="preInterviewInsert"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>인터뷰 질문</Form.Label>
          <Form.Control name="interviewModifyQuestion" type="text" placeholder="질문을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTextArea">
          <Form.Label>인터뷰 답변</Form.Label>
          <Form.Control name="interviewModifyAnswer" as="textarea" rows={5} placeholder="답변을 입력하세요"/>
        </Form.Group>
        <Button className='buttonStyle1'>
          수정하기
        </Button>
        <Link to="/admin" className='buttonStyle1'>
          목록
        </Link>
    </Form>
  </div>
  )
}

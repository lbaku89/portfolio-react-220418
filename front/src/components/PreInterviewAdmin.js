
import React, { Component } from 'react';
import {Accordion, Form, Button} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';
import {Link} from 'react-router-dom'
export default class PreInterviewAdmin extends Component {
  constructor(props){
    super(props)
    this.state={
      interviewData : []
    }
  }

  preInterviewSelectFn = async()=>{
    try{
      axios.post('/api?crud=select', {
          headers :{ 'Content-Type' : 'application/json' },
          body : { "crudId":"preInterviewSelect" }
        }
      )
      .then( res => {

        console.log("resend 확인", res.data) //데이터 콘솔에서 확인
        try{
            this.setState({ interviewData : [...res.data] })
            // array는 대체되는 정보로 쓸수없기때문에 대입식불가
            // 기존의 [] 빈정렬과 res.data을 합하는 식임
            console.log(this.state.interviewData) //리액트 변수에 데이터옮겨짐 데이터타입이 정렬이므로 map으로 풀어버림
        }
        catch(err){
            console.log('resend왔지만 에러' + err)
        }
        }
      )
      .catch( err => {
        console.log('post 요청 했지만 resend 받지 못함 ' + err)
        }
      )
   }
   catch(err){
      console.log('preinterview에서 서버접속실패' + err)
   }
  }

  submitPreInterview = async() => {
    // 유효성 검사 
    console.log("submitPreInterview 시작 ")
    const fnValidate = () => {
      if(document.getElementsByName("interviewQuestion")[0].value==""){
          document.getElementsByName("interviewQuestion")[0].focus()
          Swal.fire("질문을 입력하세요")
          return false 
        };
      if(document.getElementsByName("interviewAnswer")[0].value==""){
        document.getElementsByName("interviewAnswer")[0].focus()
        Swal.fire("답변을 입력하세요")
         return false
      };
      return true;
    }

    if(fnValidate()){
      // Form Data 담은 후 Data Decode 진행
      var formData = decodeURIComponent($("[name=preInterviewInput]").serialize());

      // Decode된 Form Data Json화
      var formDataJson = JSON.stringify(formData).replace(/\&/g, '\",\"')
          formDataJson = '{' + formDataJson.replace(/=/gi, '\":\"') + '}'
 
      try{
        axios.post('/api?crud=insert',{
          header:{ "Content-Type":"application/json"},
          // HTTP DATA통신 DATA TYPE 설정 
          body:formDataJson
        })
        .then(
          res=>{
            console.log(res.data);
            Swal.fire('질문추가 완료!')
            this.preInterviewSelectFn();
            $('.form-control[name]').val('');
            // commentSelectFn();
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
  
  preInterviewDelete = async(no) =>{
    Swal.fire({
      title: '정말 삭제 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '취소하기',
      confirmButtonText: '네, 삭제하겠습니다.'
    }).then((result) => {
      // 삭제여부 재확인 후 인터뷰 항목 삭제 진행
      if (result.isConfirmed) {
        try{
          axios.post("/api?crud=delete",
          {
            header:{'Content-Type' : 'application/json'},
            body:{
              "no":no,
              "crudId":"preInterviewDelete"}
          })
          .then(
            res=>{
              console.log("preInterviewDelete res.data:", res.data)
              this.preInterviewSelectFn()
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
      }
    })

  }

  componentDidMount = async () => {
    this.preInterviewSelectFn();
  }
  

  render(){ 

  return (  
    <div className='khysection1' id="PreInterviewWrap">
      <div className='container-md'>
        <div className="d-flex justify-contents-center align-items-start sectionTitleBox">
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>솔직하게 적어봤어요</h3>
        </div>
        <div className='m-auto' id='PreInterviewAccordionDiv'>
          <Accordion defaultActiveKey="0" id="PreInterviewAccordion">
            {this.state.interviewData.map((content,i)=>{
              console.log(typeof(content.date))
              return(
                <Accordion.Item eventKey={i.toString()} className="AccordionItem">
                  <Accordion.Header className='AccordionHeader'>
                    <div className='w-100 d-flex justify-content-between align-items-center'>
                      {i+1+". "}{content.question}
                      <div className='preInterviewButtonBox d-flex align-items-center'>
                        <Button className='buttonStyle2 fs-6' onClick={ e=>{this.preInterviewDelete(content.no)}}>삭제</Button>
                        <Link to={'/interviewModify/'+ content.no} className='buttonStyle2 fs-6'>수정</Link>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="AccordionBody">
                    <div className='row'>
                      <div className='col-2'>
                        <img src="/img/AboutMe/mySketch.png" className="d-block w-100" alt="myIcon"/>    
                      </div>
                      <div className='col-10 pt-3 pb-3 preInterviewAnswerContent'>
                        {content.answer}
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                  )
                }
              )
            }
          </Accordion>
        </div>
        <div id="preInterviewInputDiv">
          <Form name="preInterviewInput">
              <Form.Group>
                <input type='hidden' name='crudId' value="preInterviewInsert"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formNickname">
                <Form.Label>인터뷰 질문</Form.Label>
                <Form.Control name="interviewQuestion" type="text" placeholder="질문을 입력하세요" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formTextArea">
                <Form.Label>인터뷰 답변</Form.Label>
                <Form.Control name="interviewAnswer" as="textarea" rows={5} placeholder="답변을 입력하세요"/>
              </Form.Group>
              <Button className='buttonStyle1' onClick={e=>{this.submitPreInterview()}}>
                등록하기
              </Button>
          </Form>
        </div>
      </div>
    </div>
  )
  }
}

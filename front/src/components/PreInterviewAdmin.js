
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
      message:'서비스요청을 기다리는 중...',
      interviewData : [],
      deleteDB : async (no) => {
        try{
            axios.post('/api?type=interviewDelete', {
               
                body :{
                        no : no,
                        crud : 'delete',
                        mapper : this.props.dbinfo.mapper,
                        mapperid :'interviewDelete'
                 }
   
            }).then( res => {              
                 //데이터 콘솔에서 확인            
                try{                  
                    this.setState({ message : '삭제되었습니다. '});
                }
                catch(err){
                    this.setState({ message : 'DB데이터타입검수바람 ' +  err});
                }
   
            }).catch( err => {
                this.setState({ message : '접속하였으나 처리하지 못함 ' +  err});
            })
           }
           catch(err){
               this.setState({ message : '서버접속불가 ' +  err});
           }  
      }
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
        axios.post('/commentApi?crud=insert',{
          header:{ "Content-Type":"application/json"},
          // HTTP DATA통신 DATA TYPE 설정 
          body:formDataJson
        })
        .then(
          res=>{
            console.log(res.data);
            Swal.fire('질문추가 완료!')
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
    try{
      axios.post("/commentApi?crud=delete",
      {
        header:{'Content-Type' : 'application/json'},
        body:{
          "no":no,
          "crudId":"preInterviewDelete"}
      })
      .then(
        res=>{
          console.log("preInterviewDelete res.data:", res.data)
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

  componentDidMount = async () => {
    try{
      axios.post('/api?type='+this.props.dbinfo.botable, {
          headers :{ 'Content-Type' : 'application/json' },
          body : { ...this.props.dbinfo }
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
            this.setState({ message : 'DB데이터타입검수바람 ' +  err});
        }
        }
      )
      .catch( err => {
        this.setState({ message : '접속하였으나 처리하지 못함 ' +  err});
        }
      )
   }
   catch(err){
       this.setState({ message : '서버접속불가 ' +  err});
   }
  }
  

  render(){ 
  return (  
    <div className='khysection1' id="PreInterviewWrap">
      <div className='container-md'>
        <div id="PreInterviewTitleBox" className="d-flex justify-contents-center align-items-start">
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
                      <div className='preInterviewButtonBox'>
                        <Button className='buttonStyle2' onClick={ e=>{this.preInterviewDelete(content.no)}}>삭제</Button>
                        <Link to={'/interviewModify/'+ content.no} className='buttonStyle2'>수정</Link>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="AccordionBody">
                    <div className='row'>
                      <div className='col-2'>
                        <img src="/img/AboutMe/mySketch.png" className="d-block w-100" alt="myIcon"/>    
                      </div>
                      <div className='col-10 pt-3 pb-3'>
                        <p>답변 ({content.date.substr(0,10)})</p>
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

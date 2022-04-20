import React, { Component } from 'react';
import {Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';


class PreInterview extends Component{
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
            return(
              <Accordion.Item eventKey={i.toString()} className="AccordionItem">
                <Accordion.Header className='AccordionHeader'>{content.question}</Accordion.Header>
                <Accordion.Body className="AccordionBody">
                  <div className='row'>
                    <div className='col-2'>
                      <img src="/img/AboutMe/mySketch.png" className="d-block w-100" alt="myIcon"/>    
                    </div>
                    <div className='col-10 pt-3 pb-3'>
                      <p>답변</p>
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
      </div>
    </div>
  )
  }
}

export default PreInterview;
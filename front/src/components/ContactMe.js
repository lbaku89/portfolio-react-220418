import React from 'react'
import { useEffect, useState } from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap'

import $ from 'jquery'
import axios from 'axios'

export default function ContactMe(props){

  const [message, setMessage]=useState('');
  
  const submitInterview = async (type, e) => { //버튼클릭시 실행

    const  fnValidate = () =>{ 
      if(!$('#agreeTerm').is(':checked')){ 
          setMessage("동의하시게나");
          return false;
      }       
      if($('#wr_subject').val() == '' ){
        $('#wr_subject').focus();
        setMessage("제목넣기");       
        return false;
      } 
      if($('#wr_hp').val() == '' ){
        $('#wr_hp').focus();
        setMessage("연락처를 남겨주세요");       
        return false;
      }                  
      return true;  
    }

    if( fnValidate() ){       
    var jsonstr = decodeURIComponent($("[name='"+type+"']").serialize());
    console.log(jsonstr);
    console.log(typeof jsonstr);

    var Json_data = JSON.stringify(jsonstr).replace(/\&/g, '\",\"')
        Json_data = '{' + Json_data.replace(/=/gi, '\":\"') + '}'
        console.log(typeof Json_data);

      try{
      axios.post('/api?type='+type,
      //아래의 내용을 post전송한다. req.body객체임
        {         
            headers : {
            "Content-Type": `application/json`
            },
            body : Json_data
        })
          .then( result =>  {  
            //console.log(result); 
            if(result.data == 'succ')  {
              setMessage('노드에 잘 접속되고 전달되었음');
              $('.formStyle [name]').val('');

            } else{
              setMessage('쿼리 혹은 xml 접속문제')
            }

              }
          ).catch(
            (err) => { 
              setMessage('답을 못가져옴 서버어느파일인지 조사해야함 '+err )
            }
          )  
        
        }
      catch(err){
        setMessage('서버연결도 안됨 '+err )
      }
    }
    
  } //// submitInterview

  useEffect((e)=>{      
    submitInterview(props.dbinfo.botable, e)
  }, [message])

  return (
    <div className='khysection1  bg-color2' id='ContactMeWrap'>
      <div className='container-md'>
        <div id="ContactMeTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>귀사의 연락을 기다립니다</h3>
        </div>
        <div className='m-auto' id='ContactMeFormDiv'>
          <Form id='ContactMeFormTag' name={props.dbinfo.botable}>
            <Form.Group>
              <input type='hidden' name='crud' value={props.dbinfo.crud} />
              <input type='hidden' name='mapper' value={props.dbinfo.mapper} />
              <input type='hidden' name='mapperid' value={props.dbinfo.mapperid} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="wr_subject" >
              <Form.Label column sm="3" className='ps-3 pe-3'>
                회사명
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="회사명"name="wr_subject"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="wr_hp" >
              <Form.Label column sm="3" className='ps-3 pe-3' >
                담당자 연락처
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="010-6372-9168" name="wr_hp"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="interview_date" >
              <Form.Label column sm="3" className='ps-3 pe-3'>
                면접날짜, 시간
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="6/10 오후2시" name="interview_date"/>
              </Col>
            </Form.Group>
            <Form.Group className='FormGroupTag mb-3'>
              <Form.Label className='mb-2 ps-3 pe-3' >
                포지션
              </Form.Label>
              <div className='d-flex justify-content-around'>
              {['디자이너', '기획자', '퍼블리셔', '개발자'].map((type,i) => (
                <div key={`default-${type}`} className="">
                  <Form.Check 
                    type="radio"

                    label={`${type}`}
                    name="position"
                    value={type}
                  />
                </div>
              ))}
              </div>
            </Form.Group>
            <Form.Group className='FormGroupTag mb-3'>
              <Form.Label className='mb-2 ps-3 pe-3'  >
                희망 업무 능력순위
              </Form.Label>
              <div className='d-flex justify-content-around'>
              {['html,css', 'jquery', 'node,mysql', 'react'].map((type) => (
                <div key={`default-${type}`} className="">
                  <Form.Check
                    type="checkbox"
                    id={`${type}`}
                    label={`${type}`}
                    name="skills"
                    value={type}
                  />
                </div>
              ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 FormGroupTag" controlId="wr_text">
              <Form.Label className='ps-3 pe-3'>남기고 싶은 말을 적어주세요</Form.Label>
              <Form.Control className="FormControlTag ps-3 pe-3"as="textarea" rows={3} name="wr_text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="agreeTerm">
              <Form.Check type="checkbox" label="개인정보 정책 동의"/>
            </Form.Group>
            <Button variant="" type="submit" className='m-auto d-block' id="ContactMeSubmitBtn"
            onClick={e=>{submitInterview(props.dbinfo.botable,e)}}>
             면접제안
            </Button>
          </Form>
        </div>
      </div>

    </div>
  )
}

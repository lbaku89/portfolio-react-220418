import React from 'react'
import { useState } from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap'
import Swal from 'sweetalert2'
import $ from 'jquery'
import axios from 'axios'

export default function ContactMe(){

  const submitInterview = async () => { 
    // 면접제안 foam 유효성 검사 function
    const  fnValidate = () =>{   
      if(document.getElementsByName("agreeCheckBox")[0].checked===false){
        document.getElementsByName("agreeCheckBox")[0].focus()
        Swal.fire("개인정보 정책 동의 하세요")
        return false
      }
      if(document.getElementsByName("wr_subject")[0].value===''){
        document.getElementsByName("wr_subject")[0].focus()
        Swal.fire("회사명을 입력하세요.")
        return false
      }
      if(document.getElementsByName("wr_hp")[0].value===''){
        document.getElementsByName("wr_hp")[0].focus()
        Swal.fire("연락처를 적어주세요.")
        return false
      }
      if(document.getElementsByName("interview_date")[0].value===''){
        document.getElementsByName("interview_date")[0].focus()
        Swal.fire("면접시간을 적어주세요.")
        return false
      }
      if ($('input[name=position]:checked').length==0) {
        Swal.fire("position 선택해주세요");
        return false;
      }
      if(checkedValueList.length===0){
        Swal.fire("희망업무능력 순위를 선택해주세요");
        return false;
      }
      return true;  
    }

    if( fnValidate() ){       
    var jsonstr = decodeURIComponent($("[name=ContactMeFormTag]").serialize());
    console.log(jsonstr);
    console.log(typeof jsonstr);

    var Json_data = JSON.stringify(jsonstr).replace(/\&/g, '\",\"')
        Json_data = '{' + Json_data.replace(/=/gi, '\":\"') + '}'
        console.log(typeof Json_data);

      try{
      axios.post('/api?crud=insert',
      //아래의 내용을 post전송한다. req.body객체임
        {         
            headers : {
            // HTTP DATA통신 DATA TYPE 설정 
            "Content-Type": `application/json`
            },
            //request.body.body에 formDataJons 담아 전송
            body : Json_data

        })
          .then( result =>  {  
            console.log(result.data);
            Swal.fire('면접제안 요청 완료!')
            $('.form-control').val('');
            $('.form-check-input').prop("checked",false);
            checkedValueListUpdate([]);
          })
          .catch((err) => { 
              Swal.fire('면접제안 !'+err)
            }
          )  
        }
      catch(err){
        Swal.fire('서버연결도 안됨 !'+err)
      }
    }
    return false ;
  } 

  // checked 된 희망업무 능력 순위 array 생성 
  const [checkedValueList,checkedValueListUpdate] = useState([]);
  const inputCheckedValueFn = (isChecked, checkedValue)=>{
    if(isChecked){
      checkedValueListUpdate([...checkedValueList,checkedValue]);
    }else{
      checkedValueListUpdate(checkedValueList.filter( (el) => el!==checkedValue));
    }
  }



  return (
    <div className='khysection1  bg-color2' id='ContactMeWrap'>
      <div className='container-md'>
        <div id="ContactMeTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>귀사의 연락을 기다립니다</h3>
        </div>
        <div className='m-auto' id='ContactMeFormDiv'>
          <Form id='ContactMeFormTag' name="ContactMeFormTag">
            <Form.Group>
              <input type='hidden' name='crudId' value="interviewSuggetionInsert"/>
              <input type='hidden' name='skills' value={checkedValueList} />
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="wr_subject" >
              <Form.Label column sm="3" className='ps-3 pe-3'>
                회사명
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" id="wr_subject" placeholder="회사명" name="wr_subject"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="wr_hp" >
              <Form.Label column sm="3" className='ps-3 pe-3' >
                담당자 연락처
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" id="wr_hp" placeholder="010-6372-9168" name="wr_hp"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="interview_date" >
              <Form.Label column sm="3" className='ps-3 pe-3'>
                면접날짜, 시간
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" id="interview_time" placeholder="6/10 오후2시" name="interview_date"/>
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
                희망 업무 능력순위 <span className='subText'>( 순서대로 체크 )</span>
              </Form.Label>
              <div className='d-flex mb-3'>
                  {checkedValueList.map((content,i)=>{
                    return(
                      <div className='ms-3 px-3 py-1 bg-primary white text-center skillRankBox'>{i+1}순위 : {content}</div>
                    )
                  })}
                </div>
              <div className='d-flex justify-content-around'>
              {['html+css', 'jquery','node,mysql','react'].map((type) => (
                <div key={`default-${type}`} className="">
                  <Form.Check
                    type="checkbox"
                    id={`${type}`}
                    label={`${type}`}
                    name="skillNm"
                    value={type}
                    onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}
                  />
                </div>
              ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 FormGroupTag" controlId="wr_text">
              <Form.Label className='ps-3 pe-3'>남기고 싶은 말을 적어주세요</Form.Label>
              <Form.Control className="FormControlTag ps-3 pe-3"as="textarea" rows={3} name="wr_text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" name="agreeCheckBox" label="개인정보 정책 동의"  id="agreeTerm"/>
            </Form.Group>
            <Button variant="" className='m-auto d-block' id="ContactMeSubmitBtn"
            onClick={e=>{submitInterview()}}>
             면접제안
            </Button>
          </Form>
        </div>
      </div>

    </div>
  )
}

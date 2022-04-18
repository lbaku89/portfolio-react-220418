import React from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'
export default function ContactMe() {

  var hopeArray=[]
  function f1(a){     
    if(a.checked){
      hopeArray.push(a.value);
    }
    else{
      for(let i=0; i<hopeArray.length; i++)
      {
        if(hopeArray[i]==a.value){
          hopeArray.splice(i,1)
        }
      }
    }

    console.log(hopeArray);
    // var arraylength = hopeArray.length();
    // ()=>{
    //   for(var i=0; i<arraylength; i++){
    //     return(
    //       <div>`${i}+"순위 "+${hopeArray[i]}`</div>
    //     )
    //   }
    // }
  }


  return (
    <div className='khysection1  bg-color2' id='ContactMeWrap'>
      <div className='container-md'>
        <div id="ContactMeTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>귀사의 연락을 기다립니다</h3>
        </div>
        <div className='m-auto' id='ContactMeFormDiv'>
          <Form id='ContactMeFormTag'>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="formPlaintextPassword">
              <Form.Label column sm="3" className='ps-3 pe-3'>
                회사명
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="회사명" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="formPlaintextPassword">
              <Form.Label column sm="3" className='ps-3 pe-3' >
                담당자 연락처
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="010-6372-9168" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 FormGroupTag" controlId="formPlaintextPassword">
              <Form.Label column sm="3" className='ps-3 pe-3'>
                면접날짜, 시간
              </Form.Label>
              <Col sm="9">
                <Form.Control className="FormControlTag"type="text" placeholder="6/10 오후2시" />
              </Col>
            </Form.Group>
            <Form.Group className='FormGroupTag mb-3'>
              <Form.Label className='mb-2 ps-3 pe-3' >
                포지션
              </Form.Label>
              <div className='d-flex justify-content-around'>
              {['디자이너', '기획자', '퍼블리셔', '개발자'].map((type) => (
                <div key={`default-radio`} className="">
                  <Form.Check 
                    type="radio"
                    id={`${type}`}
                    label={`${type}`}
                    name="position"
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
                <div key={`default-radio`} className="">
                  <Form.Check
                    type="checkbox"
                    id={`${type}`}
                    label={`${type}`}
                    name="position"
                  />
                </div>
              ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 FormGroupTag" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='ps-3 pe-3'>남기고 싶은 말을 적어주세요</Form.Label>
              <Form.Control className="FormControlTag ps-3 pe-3"as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="개인정보 정책 동의" />
            </Form.Group>
            <Button variant="" type="submit" className='m-auto d-block' id="ContactMeSubmitBtn">
             제안하기
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

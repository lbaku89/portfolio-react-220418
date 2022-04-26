import React from 'react'
import { useState, useEffect } from 'react';

export default function Test(){
  // rendering 관리하기 위해 설정한 message parameter
  const [message,messageUpdate]=useState();
  // checked된 value값을 받기 위해 checkedValueList Array setting
  const [checkedValueList,checkedValueListUpdate] = useState([]);

  // checkbox의 상태가 변할때 마다 실행되는 함수 ( checked된 value값 순서대로 담는 기능)
  const inputCheckedValueFn = (isChecked, checkedValue)=>{
    if(isChecked){
      //체크되면 Array담기
      checkedValueListUpdate([...checkedValueList,checkedValue]);
    }else{
      //체크상태가 아니면 Array에서 빼기
      checkedValueListUpdate(checkedValueList.filter( (el) => el!==checkedValue));
    }
    setTimeout(()=>{},1)
    // 확인코드
    setTimeout(() => console.log("checkedSkillArray:"+checkedValueList), 2000);
    //message 값을 update하면서 redering
    messageUpdate("inputCheckedValueFn 실행완료")  
  }
    
  useEffect(()=>{} ,[message])
  return (  
    <div>
      <input type="checkbox" name="skill" value='html+css' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" name="skill" value='jquery' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" name="skill" value='node+mysql' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" name="skill" value='react' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
       {/* 확인코드 */}
       {console.log(checkedValueList)} 
    </div>
  )
}

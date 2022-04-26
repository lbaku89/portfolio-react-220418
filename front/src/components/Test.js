import React from 'react'
import { useState, useEffect } from 'react';

export default function Test(){


  const [message,messageUpdate]=useState();
  const [checkedValueList,checkedValueListUpdate] = useState([]);



  // // var query = 'input[name="skill"]:checked';
  // // const selectedElements = document.querySelectorAll(query);
  
  const inputCheckedValueFn = (isChecked, checkedValue)=>{
    if(isChecked){
      checkedValueListUpdate([...checkedValueList,checkedValue]);
    }else{
      checkedValueListUpdate(checkedValueList.filter( (el) => el!==checkedValue));
    }
    setTimeout(()=>{},1)
    setTimeout(() => console.log("checkedSkillArray:"+checkedValueList), 2000);
    messageUpdate("inputCheckedValueFn 실행완료")  
  }
    
  
  useEffect(()=>{} ,[message])




  return (  
    <div>
      <input type="checkbox" className="skills" name="skill" value='html+css' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" className="skills" name="skill" value='jquery' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" className="skills" name="skill" value='node+mysql' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>
      <input type="checkbox" className="skills" name="skill" value='react' onChange={e=>{inputCheckedValueFn(e.currentTarget.checked,e.currentTarget.value)}}/>

      {/* <input type="checkbox" class="skills" name="skill" value='jquery' onclick={inputArray()}>jquery</input>
      <input type="checkbox" class="skills" name="skill" value='node,mysql' onclick={inputArray()}>node,mysql</input>
      <input type="checkbox" class="skills" name="skill" value='react' onclick={inputArray()}>react</input> */}
      <p>{message}</p>
      <p>{checkedValueList}</p>
    </div>
  )
}

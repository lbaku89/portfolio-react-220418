import React from 'react'
import { useState, useEffect } from 'react';

export default function Test() {


  const [message,messageUpdate]=useState();
  const [checkedValueList,checkedValueListUpdate] = useState([]);

  // var [checkedSkill,checkedSkillUpdate] = useState([]);

  // var query = 'input[name="skill"]:checked';
  // const selectedElements = document.querySelectorAll(query);
  
  const inputCheckedValueFn = (e)=>{

    var checkedValue = e.target.value
    var isChecked = e.target.checked
    if(isChecked){
      checkedValueListUpdate([...checkedValueList,checkedValue]);
    }else{
      checkedValueListUpdate(checkedValueList.fiter( (el) => el!==checkedValue));
    }

    setTimeout(() => console.log("checkedSkillArray:"+checkedValueList), 2000);
    messageUpdate("inputCheckedValueFn 실행완료")
  
  }
    
  useEffect(inputCheckedValueFn() ,[message])


  return (  
    <div>
      <input type="checkbox" className="skills" name="skill" value='html,css' onChange={inputCheckedValueFn()}/>
      <input type="checkbox" className="skills" name="skill" value='jquery' onChange={inputCheckedValueFn()}/>
      <input type="checkbox" className="skills" name="skill" value='node,mysql' onChange={inputCheckedValueFn()}/>
      <input type="checkbox" className="skills" name="skill" value='react' onChange={inputCheckedValueFn()}/>

      {/* <input type="checkbox" class="skills" name="skill" value='jquery' onclick={inputArray()}>jquery</input>
      <input type="checkbox" class="skills" name="skill" value='node,mysql' onclick={inputArray()}>node,mysql</input>
      <input type="checkbox" class="skills" name="skill" value='react' onclick={inputArray()}>react</input> */}
      <p>{message}</p>
    </div>
  )
}

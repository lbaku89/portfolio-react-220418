import React from 'react'
import { useState } from 'react';

export default function test() {


  
  

  // var [checkedSkill,checkedSkillUpdate] = useState([]);

  // var query = 'input[name="skill"]:checked';
  // const selectedElements = document.querySelectorAll(query);
  
  function inputArray(){
    
    var isChecked = document.getElementsByClassName("skill")[0]
    console.log(isChecked.value);
    // checkedSkillUpdate(checkedSkill.push(this.vale));    
  }

  return (  
    <div>
      <input type="checkbox" className="skills" name="skill" value='html,css' onClick={e => {inputArray()}} placeholder="ddddddddddddddddd"/>
      {/* <input type="checkbox" class="skills" name="skill" value='jquery' onclick={inputArray()}>jquery</input>
      <input type="checkbox" class="skills" name="skill" value='node,mysql' onclick={inputArray()}>node,mysql</input>
      <input type="checkbox" class="skills" name="skill" value='react' onclick={inputArray()}>react</input> */}
    </div>
  )
}

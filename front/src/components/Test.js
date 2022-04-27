import React from 'react'
import { useState, useEffect } from 'react';

export default function Test(){

  const [message, setMessage] = useState('');
  const [positionIsChecked,setpositionIsChecked] = useState(0)

  const positionIsCheckedFn = (isChecked)=>{
    if(isChecked===true){
      setpositionIsChecked(1);
    }
    setMessage("positionIsCheckedFn실행완료")
  }

  console.log(positionIsChecked);
  
  useEffect(()=>{}, [message])

  return (  
    <div>
      <input type="radio" onChange={e=>{positionIsCheckedFn(e.currentTarget.checked)}}></input>
      <p>{positionIsChecked}값</p>
    </div>
  )
}

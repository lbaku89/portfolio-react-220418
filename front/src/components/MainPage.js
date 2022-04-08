import React from 'react'

export default function MainPage() {
  return (
    <div className='MainPageMainImgWrap position-relative'>
      <div className='MainPageTxtWrap position-absolute'>
        <h3>"Front-end 개발자 권현우입니다."</h3>
        <p><span className='white fw-bold'>체계적</span>이고 <span className='white fw-bold'>효율적인</span> <span className='primary fw-bold'>CODE</span>구현을 좋아합니다.</p>
        <p><span className='white fw-bold'>UX/UI</span>와 <span className='white fw-bold'>기획의도</span>를  중시합니다.</p>
        <p>기억보다는 <span className='white fw-bold'>기록</span>을 좋아합니다.</p>
        <p><a href='#AboutMe'>View More</a></p>
      </div>
    </div>
  )
}

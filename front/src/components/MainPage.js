import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainPage() {

  useEffect(() => {
    AOS.init();})

  return (
    <div className='MainPageMainImgWrap position-relative' id="mainPage">
      <div  className='MainPageTxtWrap position-absolute'>
        <h3 data-aos="fade-right" data-aos-duration="500">Front-end Developer <span className='primary gmarket'>권현우</span></h3>
        <p data-aos="fade-right" data-aos-duration="1000">체계적이고 효율적인 CODE구현을 좋아합니다</p>
        <p data-aos="fade-right" data-aos-duration="1500">UX/UI와 기획의도를  중시합니다</p>
        <p data-aos="fade-right" data-aos-duration="2000">기억보다는 기록을 좋아합니다</p>
        <p data-aos="fade-right" data-aos-duration="2500"><a href='#AboutMeWrap'>View More</a></p>
      </div>
    </div>
  )
}

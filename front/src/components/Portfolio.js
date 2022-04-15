import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Portfolio() {
  return (
    <div className='khysection1 bg-color2'>
      <div className='container-lg'>
        <div id="PorfolioTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>권현우 작업물</h3>
        </div>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='container-lg'>
          <div className="row">
            <div className='col-12 col-lg-6'>
              <img src='/img/Porfolio/port0.png' className='d-block w-100'></img>
            </div>
            <div className='col-12 col-lg-6' style={{"border":"1px solid black"}}>
              <p>포트폴리오 설명</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      ...
    </Swiper>
    </div>
  )
}

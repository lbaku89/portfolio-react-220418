import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



import { Pagination } from "swiper";

export default function Portfolio() {
  return (
    <div className='khysection1 bg-color2'>
      <div className='container-lg'>
        <div id="PorfolioTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>권현우 작업물</h3>
        </div>
      </div>

      <Swiper slidesPerView={1} pagination={{clickable:true}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <div className='container-xl'>
          <div className="row mb-5">
            <div className='col-12 col-md-6'>
              <img src='/img/Porfolio/port0.png' className='d-block w-100'></img>
            </div>
            <div className='col-12 col-md-6' style={{"border":"1px solid black"}}>
  
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>


       {/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
   
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      ...
    </Swiper>  */}
    </div>
  )
}

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";


import { Pagination } from "swiper";

export default function Portfolio() {
  return (
    <div className='khysection1 bg-color2' id="PortfolioWrap">
      <div className='container-lg'>
        <div id="PorfolioTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>권현우 작업물</h3>
        </div>
        <Swiper slidesPerView={1} pagination={{clickable:true}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <div className='container-xl'>
          <div className="row mb-5">
            <div className='col-12 col-md-6'>
              <img src='/img/Porfolio/port0.png' className='d-block w-100'></img>
            </div>
            <div className='col-12 col-md-6' >
              <div>
                <h3>반응형 광고 페이지</h3>
                <h4>단독작업/제작기간 1주일</h4>
                <h5>제작특징</h5>
                <p>Boostrap5를 이용하여 제작기간 단축</p>
                <p>Client를 고려한 반응형 제작</p>
                <p>Contents 관리를 위한 CMS구축</p>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container-xl'>
          <div className="row mb-5">
            <div className='col-12 col-md-6'>
              <img src='/img/Porfolio/port0.png' className='d-block w-100'></img>
            </div>
            <div className='col-12 col-md-6' >
              <div>
                <h3>반응형 광고 페이지</h3>
                <h4>단독작업/제작기간 1주일</h4>
                <h5>제작특징</h5>
                <p>Boostrap5를 이용하여 제작기간 단축</p>
                <p>Client를 고려한 반응형 제작</p>
                <p>Contents 관리를 위한 CMS구축</p>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='container-xl'>
          <div className="row mb-5">
            <div className='col-12 col-md-6'>
              <img src='/img/Porfolio/port0.png' className='d-block w-100'></img>
            </div>
            <div className='col-12 col-md-6' >
              <div>
                <h3>반응형 광고 페이지</h3>
                <h4>단독작업/제작기간 1주일</h4>
                <h5>제작특징</h5>
                <p>Boostrap5를 이용하여 제작기간 단축</p>
                <p>Client를 고려한 반응형 제작</p>
                <p>Contents 관리를 위한 CMS구축</p>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

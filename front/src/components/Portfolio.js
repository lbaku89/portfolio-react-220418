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
        <Swiper slidesPerView={1} pagination={{clickable:true}} modules={[Pagination]} id="mySwiper">
          <SwiperSlide>
          <div className='container-xl'>
            <div className="row mb-5">
              <div className='col-12 col-md-6 py-3 ps-3 ps-md-5 py-md-5'>
                <img src='/img/Porfolio/portfolio1.jpg' className='d-block w-100'></img>
              </div>
              <div className='col-12 col-md-6 p-3 p-md-5'>
                  <p className="gmarketBold mb-0 swiperPortfolioTitleNm">Pre-Interview</p>
                  <p className="fs-4 gmarket">Restful api를 이용한 CMS구축</p>
                  <p className="bg-color3 d-inline-block p-2 gmarket white">단독작업 / 제작기간 2일</p>
                  <ul className="ps-0 gmarket">
                    <li>- Contents : 권현우 가상면접 </li>
                    <li>- React 함수형, 클래스형 component 사용</li>
                    <li>- Restful api 사용하여 사용자와 interaction 가능하도록 구현</li>
                    <li>- react-bootstrap Component, Bootstrap5, scss 사용</li>
                    <li>- 로그인 시 Contents를 관리할 수 있도록 CMS 구축</li>
                    <li>- 가독성 향상을 위해 fontawesome, sweetalert2 사용</li>
                    <li>- useState를 이용한 변수관리 </li>
                    <li>- useNavigate를 이용한 경로 변경</li>
                    <li>- useParams 이용한 주소창 변수 추출</li>
                    <li>- useNavigate, Link Component 사용하여 경로변경</li>
                  </ul>
                  <div>
                    <a className="fs-5 primary gmarket me-3 buttonStyle4" href="https://drive.google.com/file/d/1Z-UDTvTBzfdrryl7CKRMDalujyetYDBM/view?usp=sharing" target="_blank">제작노트</a>
                    <a className="fs-5 primary gmarket buttonStyle4" href="#PreInterviewWrap">보러가기</a>
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

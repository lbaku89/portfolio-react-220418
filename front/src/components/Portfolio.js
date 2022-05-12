import React from "react";

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
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
        <Swiper slidesPerView={1} pagination={{clickable:true}} modules={[Pagination]} className="py-5 h-100" id="mySwiper">
          <SwiperSlide>
            <div className="row align-items-center px-3">
              <div className='col-12 col-lg-6  mb-5 mb-lg-0 d-flex flex-column justify-content-center'>
                <div className="gmarket text-center mb-4">
                  <p className="primary fs-3 mb-2">UI/UX 기획 및 설계</p>
                  <p className="bg-color1 white d-inline-block px-3 mb-2 pt-1">제작목적</p>
                  <p>인사담당자가 '권현우'라는 구직자에게 궁금해 할 만한 사항들에<br></br>
                    대한 대답을 미리 작성하여 보여주기 위해 제작
                  </p>
                </div>
                <div className="gmarket text-center mb-4">
                  <p className="primary fs-3 mb-2">DB설계</p>
                  <p className="bg-color1 white d-inline-block px-3 mb-2 pt-1">제작환경</p>
                  <p>DB : AWS RDS MySQL<br></br>
                    MySQL Workbench 사용</p>
                </div>
                <div className="gmarket text-center mb-0">
                  <p className="primary fs-3 mb-2">서버구축 및 연동</p>
                  <p className="bg-color1 white d-inline-block px-3 mb-2 pt-1">제작환경</p>
                  <p className="mb-0">React ( v17.0 )  + Node ( v16.14 ) + xml + MySQL
                  </p>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                  <p className="gmarketBold mb-0 swiperPortfolioTitleNm">Pre-Interview</p>
                  <p className="fs-4 gmarket">Restful api를 이용한 CMS구축</p>
                  <p className="bg-color3 d-inline-block p-2 gmarket white">단독작업 / 제작기간 3일</p>
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
                  <div className="d-flex align-items-center">
                    <a className="fs-5 primary gmarket me-3 buttonStyle4" href="https://drive.google.com/file/d/11nHxhbYnmd3PITEF34rBocgZfiyLDjsV/view?usp=sharing" target="_blank">제작노트</a>
                    <a className="fs-5 primary gmarket buttonStyle4 me-3" href="#PreInterviewWrap">작업물</a>
                    <a className="fs-5 primary gmarket buttonStyle4 me-3" href="#PreInterviewWrap">GitHub<FontAwesomeIcon icon={faGithub} className="ms-1"/></a>

                    {/* <FontAwesomeIcon icon={faGithub} className="fs-2"/> */}

                  </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
          <div className='container-xl'>
            <div className="row">
              <div className='col-12 col-md-6'>
                <img src='/img/Porfolio/portfolio2.jpg' className='d-block w-100'></img>
              </div>
              <div className='col-12 col-md-6'>
                  <p className="gmarketBold mb-0 swiperPortfolioTitleNm">Contact Me!</p>
                  <p className="fs-4 gmarket">Restful api를 이용한 Form 제작</p>
                  <p className="bg-color3 d-inline-block p-2 gmarket white">단독작업 / 제작기간 2일</p>
                  <ul className="ps-0 gmarket">
                    <li>- Contents : 권현우 지원자에게 면접제안 </li>
                    <li>- React 함수형 component 사용</li>
                    <li>- Restful api 사용하여 사용자와 interaction 가능하도록 구현</li>
                    <li>- react-bootstrap Component, Bootstrap5, scss 사용</li>
                    <li>- Form에 입력된 Data 한번에 담기 위해 jquery serialize 사용</li>
                    <li>- Form 유효성 검사를 통해 DB에 불필요한 Data 유입 방지</li>
                    <li>- useState를 사용하여 array 관리 </li>
                    <li>- 사용성 향상을 위해 sweetalert2 사용</li>
                  </ul>
                  <div>
                    <a className="fs-5 primary gmarket me-3 buttonStyle4" href="https://drive.google.com/file/d/12-Eis8wHh-f9qaYgF4jPIcsPUcdbsDVS/view?usp=sharing" target="_blank">제작노트</a>
                    <a className="fs-5 primary gmarket buttonStyle4" href="#ContactMeWrap">보러가기</a>
                  </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='container-xl'>
            <div className="row">
              <div className='col-12 col-md-6'>
                <img src='/img/Porfolio/portfolio3.jpg' className='d-block w-100'></img>
              </div>
              <div className='col-12 col-md-6'>
                  <p className="gmarketBold mb-0 swiperPortfolioTitleNm">Comment</p>
                  <p className="fs-4 gmarket">Restful api를 이용한 후기게시판 제작</p>
                  <p className="bg-color3 d-inline-block p-2 gmarket white">단독작업 / 제작기간 3일</p>
                  <ul className="ps-0 gmarket">
                    <li>- Contents : 방문후기 게시판 </li>
                    <li>- React 함수형 component 사용</li>
                    <li>- Restful api 사용하여 사용자와 interaction 가능하도록 구현</li>
                    <li>- react-bootstrap Component, Bootstrap5, scss 사용</li>
                    <li>- Form에 입력된 Data 한번에 담기 위해 jquery serialize 사용</li>
                    <li>- Form 유효성 검사를 통해 DB에 불필요한 Data 유입 방지</li>
                    <li>- 사용성 향상을 위해 sweetalert2 사용</li>
                    <li>- useState를 사용하여 화면에 노출되는 Comment list관리</li>
                    <li>- useEffect 사용하여 최신 Data 화면에 노출</li>
                  </ul>
                  <div>
                    <a className="fs-5 primary gmarket me-3 buttonStyle4" href="https://drive.google.com/file/d/1CnOazGbeybqW7bMzEuqpKPWzgvF5xtwB/view?usp=sharing" target="_blank">제작노트</a>
                    <a className="fs-5 primary gmarket buttonStyle4" href="#CommentComponentWrap">보러가기</a>
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

import React from "react";

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import SwiperCore, { Pagination } from "swiper";









export default function Portfolio() {

  const myPortfolioInfo = [
    {
      purposeTxt1 : "프론트엔드 지원자 권현우를",
      purpsoeTxt2 : "소개하기 위한 페이지",
      Period : "2주",
      Title : "Self-Introduction",
      SubTitle : "자기소개를 위한 SPA",
      Explanation : [
        "- Contents : 권현우 소개",
        "- React를 이용한 SPA제작 불필요한 re-loading 제거하여 효율성과 속도 향상",
        "- Node, Mysql, React, xml 연동하여 사용자와의 interaction 가능하도록 제작 ( Restful api )",
        "- Form 유효성 검사 진행하여 양식에 맞지 않는 정보는 db source 낭비하지 않도록 방지",
        "- Bootstrap5, Reactstrap, React-bootstrap, scss 사용하여 신속한 작업",
        "- 다양한 기기를 고려한 반응형 화면 제작 ( bootstrap grid system )",
        "- Contents 관리를 위한 관리자 login system 구현",
        "- 사용자와의 interaction 결과가 즉각적으로 반영 되도록 react hook 활용",
        "- react hook을 활용한 함수형 Component update",
        "- react life cycle를 이해하기 위해 Class Component 제작",
      ],
      workNoteSrc : "https://drive.google.com/file/d/1xsOGN4rOjIJTmQkzDLkTxROOBnqNQLae/view?usp=sharing",
      project : "#mainPage",
      gitHubSrc : "https://github.com/lbaku89/portfolio-react-220418"
    },
    {
      purposeTxt1 : "인사담당자가 '권현우'라는 구직자에게 궁금해 할 만한 사항들에",
      purpsoeTxt2 : "대한 대답을 미리 작성하여 보여주기 위해 제작",
      Period : "3일",
      Title : "Pre-Interview",
      SubTitle : "Restful api를 이용한 CMS구축",
      Explanation : [
        "- Contents : 권현우 가상면접",
        "- React 함수형, 클래스형 component 사용",
        "- Restful api 사용하여 사용자와 interaction 가능하도록 구현",
        "- react-bootstrap Component, Bootstrap5, scss 사용",
        "- 로그인 시 Contents를 관리할 수 있도록 CMS 구축",
        "- 가독성 향상을 위해 fontawesome, sweetalert2 사용",
        "- useState를 이용한 변수관리",
        "- useNavigate를 이용한 경로 변경",
        "- useParams 이용한 주소창 변수 추출",
        "- useNavigate, Link Component 사용하여 경로변경",
      ],
      workNoteSrc : "https://drive.google.com/file/d/1oHTcdfjbN99U5NyphSJ9kuhVms6-zU_4/view?usp=sharing",
      project : "#PreInterviewWrap",
      gitHubSrc : "https://github.com/lbaku89/portfolio-react-220418/blob/main/front/src/components/PreInterview.js"
    },
    {
      purposeTxt1 : "인사담당자가 ‘권현우’ 라는 구직자에게 면접제안을",
      purpsoeTxt2 : "할 수 있는 Form 제작",
      Period : "2일",
      Title : "Contact Me!",
      SubTitle : "Restful api를 이용한 Form 제작",
      Explanation : [
        "- Contents : 권현우 지원자에게 면접제안",
        "- React 함수형 component 사용",
        "- Restful api 사용하여 사용자와 interaction 가능하도록 구현",
        "- react-bootstrap Component, Bootstrap5, scss 사용",
        "- Form에 입력된 Data 한번에 담기 위해 jquery serialize 사용",
        "- Form 유효성 검사를 통해 DB에 불필요한 Data 유입 방지",
        "- useState를 사용하여 array 관리",
        "- 사용성 향상을 위해 sweetalert2 사용",
      ],
      workNoteSrc : "https://drive.google.com/file/d/1-7OjgqJ_G8gEEPZUVuSVsm3ePbLkFtsX/view?usp=sharing",
      project : "#ContactMeWrap",
      gitHubSrc : "https://github.com/lbaku89/portfolio-react-220418/blob/main/front/src/components/ContactMe.js"
    },
    {
      purposeTxt1 : "자기소개 페이지를 방문한 사람들이 후기를 남길 수 있도록",
      purpsoeTxt2 : "간단한 방명록을 제작했습니다.",
      Period : "2일",
      Title : "Comment!",
      SubTitle : "Restful api를 이용한 방명록 제작",
      Explanation : [
        "- Contents : 방문후기 게시판",
        "- React 함수형 component 사용",
        "- Restful api 사용하여 사용자와 interaction 가능하도록 구현",
        "- react-bootstrap Component, Bootstrap5, scss 사용",
        "- Form에 입력된 Data 한번에 담기 위해 jquery serialize 사용",
        "- Form 유효성 검사를 통해 DB에 불필요한 Data 유입 방지",
        "- 사용성 향상을 위해 sweetalert2 사용",
        "- useState 사용하여 화면에 노출되는 Comment list관리",
        "- useEffect 사용하여 최신 Data 화면에 노출"
      ],
      workNoteSrc : "https://drive.google.com/file/d/1xrXsgDUUnloJJH6lg4Kf9oXS0GT3Tz0b/view?usp=sharing",
      project : "#CommentComponentWrap",
      gitHubSrc : "https://github.com/lbaku89/portfolio-react-220418/blob/main/front/src/components/Comment.js"
    }
  ]
  
  
//SwiperCore.use([Navigation]);

SwiperCore.use([Pagination]);

  return (
    <div className='khysection1 bg-color2' id="PortfolioWrap">
      <div className='container-lg'>
        <div className="sectionTitleBox d-flex justify-contents-center align-items-start pt-5" id="PortfolioWrap2"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>권현우 작업물</h3>
        </div>
        <Swiper slidesPerView={1}  pagination={{clickable:true}} modules={[Pagination]}      
       className="mySwiper py-5 h-100" id="mySwiper">
          {myPortfolioInfo.map((content, i)=>{
            return(
              <SwiperSlide key={"portfolioKey"+i}>
                <div className="row align-items-center px-3">
                  <div className='col-12 col-md-6  mb-5 mb-lg-0 d-flex flex-column justify-content-center portfolioLeftBox'>
                    <div className="gmarket text-center mb-2 mb-md-4">
                      <p className="fs-3 mb-2">UI/UX 기획 및 설계</p>
                      <p className="bg-color4 white d-inline-block px-3 mb-2 pt-1">제작목적</p>
                      <p>{content.purposeTxt1}<br></br>
                      {content.purpsoeTxt2}
                      </p>
                    </div>
                    <div className="gmarket text-center mb-2 mb-md-4">
                      <p className="fs-3 mb-2">DB설계</p>
                      <p className="bg-color4 white d-inline-block px-3 mb-2 pt-1">제작환경</p>
                      <p>DB : AWS RDS MySQL<br></br>
                        MySQL Workbench 사용</p>
                    </div>
                    <div className="gmarket text-center">
                      <p className="fs-3 mb-2">서버구축 및 연동</p>
                      <p className="bg-color4 white d-inline-block px-3 mb-2 pt-1">제작환경</p>
                      <p className="mb-0">React ( v17.0 )  + Node ( v16.14 ) + xml + MySQL
                      </p>
                    </div>
                  </div>
                  <div className='col-12 col-md-6 d-flex'>
                    <div className="m-auto">
                        <p className="gmarketBold mb-0 swiperPortfolioTitleNm">{content.Title}</p>
                        <p className="fs-4 gmarket">{content.SubTitle}</p>
                        <p className="bg-color3 d-inline-block p-2 gmarket white">단독작업 / {content.Period}</p>
                        <ul className="ps-0 gmarket">
                          {
                            content.Explanation.map((subContent,j)=>{
                              return(<li className="portfolioExplanation" key={"explanationKey"+j}>{subContent}</li>)
                            })
                          }
                        </ul>
                        <div className="d-flex align-items-center ">
                          <a className="primary gmarket me-3 buttonStyle4 portfolioLink" rel="noopener noreferrer" href={content.workNoteSrc} target="_blank">제작노트</a>
                          <a className="primary gmarket buttonStyle4 me-3 portfolioLink" href={content.project}>보러가기</a>
                          <a className="primary gmarket buttonStyle4 me-3 portfolioLink" rel="noopener noreferrer" target="_blank" href={content.gitHubSrc}>GitHub<FontAwesomeIcon icon={faGithub} className="ms-1 black"/></a>
                        </div>
                      </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}


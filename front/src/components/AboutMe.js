
import React from 'react'

// AOS 사용 SETTING
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function AboutMe() {

  const myAbility = [
    { imgSrc:"/img/icon/figma2Icon.svg", 
      alt:"figma icon", 
      skillNm:"Figma", 
      stack:"stack90", 
      graphPercent:"90"},

    { imgSrc1:"/img/icon/illustratorIcon.png", 
      imgSrc2:"/img/icon/photoshopIcon.png",
      alt1:"illustrator icon",
      alt2:"photoshop icon", 
      skillNm:"Photoshop, Illustrator", 
      stack:"stack95", 
      graphPercent:"95"},

    { imgSrc1:"/img/icon/htmlIcon.png", 
      imgSrc2:"/img/icon/cssIcon.png",
      alt1:"html icon",
      alt2:"css icon", 
      skillNm:"HTML, CSS", 
      stack:"stack90", 
      graphPercent:"90"},
    
    { imgSrc:"/img/icon/sassIcon.png", 
    alt:"sass icon", 
    skillNm:"Sass", 
    stack:"stack60", 
    graphPercent:"60"},

    { imgSrc:"/img/icon/javascriptIcon.png", 
    alt:"javascript icon", 
    skillNm:"Javascript", 
    stack:"stack70", 
    graphPercent:"70"},

    { imgSrc:"/img/icon/reactIcon.png", 
    alt:"react icon", 
    skillNm:"React", 
    stack:"stack70", 
    graphPercent:"70"},

    { imgSrc:"/img/icon/nodeIcon.png", 
    alt:"node icon", 
    skillNm:"Node", 
    stack:"stack60", 
    graphPercent:"60"},

    { imgSrc:"/img/icon/jquery.gif", 
    alt:"jquery icon", 
    skillNm:"jquery", 
    stack:"stack90", 
    graphPercent:"90"},

    { imgSrc1:"/img/icon/mysqlIcon.png", 
      imgSrc2:"/img/icon/xml.svg",
      alt1:"mysql icon",
      alt2:"xml icon", 
      skillNm:"Mysql, xml", 
      stack:"stack50", 
      graphPercent:"50"},
  ]

  

  useEffect(() => {
    AOS.init();
  })
  
  return (
    <div id='AboutMeWrap'  className='container-lg khysection1'>
        {/*section title text */}
        <div id="AboutMeTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>저를 소개해요</h3>
        </div>
        <div id="AboutMeContentsBox" className='row'>
          {/* contents 영역  */}
          {/* contents -left */}
          <div id="AboutMeLeftDiv" className='col-12 col-md-12 col-lg-6 mb-5 mb-lg-0'>
            <div className='d-flex gmarket'>
              <div className='col-6 profileImgBox me-0'></div>
              <div className='col-6 ms-3 ms-md-0'>
                <div className='fs-2'>권현우<span className='fs-5'>( 1993.4.10 )</span></div>
                <ul className='ps-0 mt-3'>
                  <li>경기도 부천시 거주</li>
                  <li>010-6372-9168</li>
                  <li>khj930410@naver.com</li>
                </ul>
                <ul className='ps-0 mt-3'>
                  <li>서울과학기술대 졸업(공학계열)</li>
                  <li>MCENX 기구설계 엔지니어 2년 근무</li>
                  <li>PWA 프론트엔드 6개월 과정 수료</li>
                </ul>
              </div>
            </div>
            <div id="certificateWrap"className='gmarket'>
              <h3 className='text-center mb-5'>자격증</h3>
              <div className='certificateDiv d-flex'>
                <div className='ms-5'>
                  <h5>직무관련</h5>
                  <p>2022년</p>
                  <ul>
                    <li>GTQ 포토샵</li>
                    <li>웹디자인기능사</li>
                  </ul>
                </div>
                <div className='ms-5'>
                  <h5>OA</h5>
                  <p>2016~2018년</p>
                  <ul>
                    <li>컴활 2급</li>
                    <li>ITQ 아래한글</li>
                    <li>ITQ 한글엑셀</li>
                    <li>ITQ 파워포인트</li>
                    <li>ITQ 인터넷</li>
                  </ul>
                </div>
                <div className='ms-5'>
                  <h5>그외</h5>
                  <p>2016~2022년</p>
                  <ul>
                    <li>구글애널리틱스</li>
                    <li>한국사 2급</li>
                    <li>운전면허</li>
                    <li>토익 915점(만료)
                    </li>
                    <li>토익 스피킹 Lv6(만료)</li>
                  </ul>
                </div>

              </div>
            </div>
  
          </div>
          {/* contents -right */}
          <div id="AboutMeRightDiv"  className='col-12 col-md-12 col-lg-6'>
            <ul id="AboutMeSkillUl">
              {myAbility.map((content,i)=>{
                if(i===1||i===2||i===8){
                  return(
                    <li className='row' data-aos="fade-up" data-aos-duration={300*i}>
                      <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                        <img src={content.imgSrc1} alt={content.alt1} className='AboutMeIcon me-1'/>
                        <img src={content.imgSrc2} alt={content.alt2} className='AboutMeIcon'/> 
                      </div>
                    <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                      <p>{content.skillNm}</p>
                      <div className='graph w-100'>
                        <span className={content.stack} ></span>
                      </div>
                    </div>
                    <span className="graphTxtDiv col-2">
                    {content.graphPercent}<span>%</span>
                    </span>
                  </li>
                  )
                }
                else{
                  return(
                    <li className='row' data-aos="fade-up" data-aos-duration={300*i}>
                    <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                      <img src={content.imgSrc} alt={content.alt} className='AboutMeIcon'/> 
                    </div>
                    <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                      <p>{content.skillNm}</p>
                      <div className='graph w-100'>
                        <span className={content.stack}></span>
                      </div>
                    </div>
                    <span className="graphTxtDiv col-2">
                    {content.graphPercent}<span>%</span>
                    </span>
                  </li>
                  )
                  
                }
              })
              }


              {/* {myAbility.map((content,i)=>{
                  return(
                    <li className='row'>
                    <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                      if(i===1||i===2||i===8){
                        return(
                          <img src={content.imgSrc1} alt={content.alt1} className='AboutMeIcon me-1'/>
                          <img src={content.imgSrc2} alt={content.alt2} className='AboutMeIcon'/> 
                        )
                      }                     
                      else{
                          return(
                            <img src={content.imgSrc} alt={content.alt} className='AboutMeIcon'/>
                          )
                      }
                    
                    </div>
                    <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                      <p>{content.skillNm}</p>
                      <div className='graph w-100'>
                        <span className={content.stack}></span>
                      </div>
                    </div>
                    <span className="graphTxtDiv col-2">
                    {content.graphPercent}<span>%</span>
                    </span>
                  </li>
                  )
                })
              } */}
            
      
              

              
              
            </ul>
          </div>
        </div>
    </div>
  )
}
              
     
              

              
             
        



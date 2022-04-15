
import React from 'react'

// AOS 사용 SETTING
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {

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
          <div id="AboutMeLeftDiv" className='col-12 col-md-12 col-lg-6'>
            <div className='d-flex'>
              <div className='col-6 profileImgBox'></div>
              <div className='col-6 ms-4'>
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
          </div>
          {/* contents -right */}
          <div id="AboutMeRightDiv" data-aos="fade-up" data-aos-duration="3000" className='col-12 col-md-12 col-lg-6'>
            <ul id="AboutMeSkillUl">
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/figma2Icon.svg" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>Figma</p>
                  <div className='graph w-100'>
                    <span className='stack90'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  90<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/illustratorIcon.png" alt="figma Icon" className='AboutMeIcon me-1'/>
                  <img src="/img/icon/photoshopIcon.png" alt="figma Icon" className='AboutMeIcon'/> 
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>Photoshop, Illustrator</p>
                  <div className='graph w-100'>
                    <span className='stack95'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  95<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/htmlIcon.png" alt="figma Icon" className='AboutMeIcon me-1'/>
                  <img src="/img/icon/cssIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>HTML, CSS</p>
                  <div className='graph w-100'>
                    <span className='stack90'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  90<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/sassIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>Sass</p>
                  <div className='graph w-100'>
                    <span className='stack60'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  60<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/javascriptIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>Javascript</p>
                  <div className='graph w-100'>
                    <span className='stack70'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  70<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/reactIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>React</p>
                  <div className='graph w-100'>
                    <span className='stack70'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  70<span>%</span>
                </span>
              </li>               
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/nodeIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>Node</p>
                  <div className='graph w-100'>
                    <span className='stack60'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  60<span>%</span>
                </span>
              </li>              
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/jquery.gif" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>jQuery</p>
                  <div className='graph w-100'>
                    <span className='stack90'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  90<span>%</span>
                </span>
              </li>
              <li className='row'>
                <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                  <img src="/img/icon/mysqlIcon.png" alt="figma Icon" className='AboutMeIcon me-1'/>
                  <img src="/img/icon/xml.svg" alt="figma Icon" className='AboutMeIcon'/>
                </div>
                <div className='AboutMeSkillgraphBox col-10 col-sm-8'>
                  <p>MySQL, xml</p>
                  <div className='graph w-100'>
                    <span className='stack50'></span>
                  </div>
                </div>
                <span className="graphTxtDiv col-2">
                  50<span>%</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
              
     
              

              
             
        



import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function AboutMe(){

  // skill 능숙도 data
  const myAbility = [
    { 
      imgSrc:[
      { img : "/img/icon/figma2Icon.svg",
        alt : 'figma icon'}],
      skillNm:"Figma",
      stack:"stack90",
      graphPercent:"90"
    },
    {
      imgSrc:[
        { img : "/img/icon/illustratorIcon.png",
          alt : 'illustrator icon'},
        { img : "/img/icon/photoshopIcon.png",
          alt : 'photoshop icon'},
        ],
      skillNm:"Photoshop, Illustrator",
      stack:"stack95",
      graphPercent:"95"
    },
    {
      imgSrc:[
        { img : "/img/icon/htmlIcon.png",
          alt : "html icon"},
        { img : "/img/icon/cssIcon.png",
          alt : "css icon"},
        ],
      skillNm:"Html, css",
      stack:"stack95",
      graphPercent:"95"
    },
    { 
      imgSrc:[
      { img : "/img/icon/sassIcon.png",
        alt : "sass icon"}],
      skillNm:"Sass",
      stack:"stack60",
      graphPercent:"60"
    }, 
    { 
      imgSrc:[
      { img : "/img/icon/javascriptIcon.png",
        alt : "javascript icon"}],
      skillNm:"Javascript",
      stack:"stack70",
      graphPercent:"70"
    },
    { 
      imgSrc:[
      { img : "/img/icon/reactIcon.png",
        alt : "react icon"}],
      skillNm:"React",
      stack:"stack70",
      graphPercent:"70"
    },
    { 
      imgSrc:[
      { img : "/img/icon/nodeIcon.png",
        alt : "node icon"}],
      skillNm:"Node",
      stack:"stack60",
      graphPercent:"60"
    },
    { 
      imgSrc:[
      { img : "/img/icon/jquery.gif",
        alt : "jquery icon"}],
      skillNm:"jquery",
      stack:"stack90",
      graphPercent:"90"
    },
    {
      imgSrc:[
        { img : "/img/icon/mysqlIcon.png",
          alt : "mysql icon"},
        { img : "/img/icon/xml.svg",
          alt : "xml icon"},
        ],
      skillNm:"Mysql, xml",
      stack:"stack50",
      graphPercent:"50"
    },
  ]

  useEffect(() => {
    AOS.init();
  })
 
  return (
    <div id='AboutMeWrap'  className='container-lg khysection1'>
        {/*section title text */}
        <div className="sectionTitleBox d-flex justify-contents-center align-items-start pt-5" id="AboutMeWrap2">
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>저를 소개해요</h3>
        </div>
        <div id="AboutMeContentsBox" className='row'>
          {/* contents 영역  */}
          {/* contents -left */}
          <div id="AboutMeLeftDiv" className='col-12 col-md-12 col-lg-6 mb-5 mb-lg-0'>
            <div className='d-flex row gmarket'>
              <div className=' col-12 col-md-6 profileMyPictureBox'>
                <img src='/img/AboutMe/myPicture.jpg' alt='myPorfile' className='px-3 profileMyPicture d-block'></img>
              </div>
              <div className=' col-12 col-md-6 mt-3 mt-md-0 myProfileContents'>
                <div className='fs-2'>권현우<span className='fs-5'>( 1993.4.10 )</span></div>
                <ul className='ps-0 mt-3'>
                  <li>경기도 부천시 거주</li>
                  <li>010-6372-9168</li>
                  <li>khj930410@naver.com</li>
                </ul>
                <ul className='ps-0 mt-3'>
                  <li>서울과학기술대 졸업(공학계열)</li>
                  <li>MCNEX 기구설계 엔지니어 2년 근무</li>
                  <li>PWA 프론트엔드 6개월 과정 수료</li>
                  <li>우수 교육생 선발</li>
                </ul>
              </div>
            </div>
            <div id="certificateWrap"className='gmarket px-3'>
              <h3 className='fs-2 mb-4 text-center'>자격증</h3>
              <div className='certificateDiv d-flex text-center'>
                <div className='certificateBox'>
                  <h5 >직무관련</h5>
                  <p className='color4'>2022년</p>
                  <ul>
                    <li>- GTQ 포토샵</li>
                    <li>- 웹디자인기능사</li>
                  </ul>
                </div>
                <div className='certificateBox'>
                  <h5>OA</h5>
                  <p className='color4'>2016~2018년</p>
                  <ul>
                    <li>- 컴활 2급</li>
                    <li>- ITQ 아래한글</li>
                    <li>- ITQ 한글엑셀</li>
                    <li>- ITQ 파워포인트</li>
                    <li>- ITQ 인터넷</li>
                  </ul>
                </div>
                <div className='certificateBox'>
                  <h5>그외</h5>
                  <p className='color4'>2016~2022년</p>
                  <ul>
                    <li>- 한국사 2급</li>
                    <li>- 운전면허</li>
                    <li>- 토익 915점(만료)</li>
                    <li>- 토익 스피킹 Lv6(만료)</li>
                  </ul>
                </div>
              </div>
            </div>
 
          </div>
          {/* contents -right */}
          <div id="AboutMeRightDiv"  className='col-12 col-md-12 col-lg-6'>
            <p className='text-center fs-2 gmarket'>Skills</p>
            <ul id="AboutMeSkillUl">
              {myAbility.map((content,i)=>{
                  return(
                    <li className='row' data-aos="fade-up" data-aos-duration={300*i} key={"myAbilityKey"+i} >
                      <div className='AboutMeIconBox col-5 col-sm-2 display-flex align-items-center'>
                      {content.imgSrc.map((content2,j)=> {
                        return(
                          <img src={content2.img} alt={content2.alt} className='AboutMeIcon me-1'key={"ImgKey"+j} />
                            )
                          }
                        )
                      }
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
              })
            }              
            </ul>
          </div>
        </div>
    </div>
  )
}
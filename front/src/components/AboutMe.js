import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div id='AboutMeWrap'>
          {/*section title text */}
          <div id="AboutMeTitleBox" className="d-flex justify-contents-center"> 
            <div className='bg-primary'></div>
            <h3>About Me</h3>
            <img src='/logo/mySketch.png' className='display-inlineblock'></img>
          </div>
          <div id="AboutMeContentsBox" className='d-flex justify-content-center'>
            {/* contents 영역  */}
            {/* contents -left */}
            <div id="AboutMeLeftDiv">
              <div>
                <p>- 인적사항 -</p>
                <ul>
                  <li>권현우 ( 1993.04.10 ) </li>
                  <li>010-6372-9168</li>
                  <li>khj930410@naver.com</li>
                  <li>서울과학기술대 졸업 ( 공과대학 )</li>
                  <li>MCNEX 기구설계 엔지니어 2년근무</li>
                  <li>PWA 프론트엔드 과정( 6개월 )수료</li>
                  <li>PWA 교육과정 우수훈련생 발탁</li>
                </ul>
              </div>
              <div>
                <p>- 자격증 -</p>
                <ul>
                  <li>GTQ 포토샵 1급</li>
                  <li>웹디자인기능사</li>
                  <br></br>
                  <li>컴퓨터활용 능력 2급</li>
                  <li>ITQ 아래한글</li>
                  <li>ITQ 한글엑셀</li>
                  <li>ITQ 한글파워포인트</li>
                  <li>ITQ 인터넷</li>
                  <br></br>
                  <li>구글애널리틱스</li>
                  <li>한국사 능력검정시험 2급</li>
                  <li>운전면허</li>
                </ul>
              </div>
            </div>
            {/* contents -right */}
            <div id="AboutMeRightDiv">
              <p>- SKILLS -</p>
              <ul id="AboutMeSkillUl">
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                    <img src="/img/icon/figma2Icon.svg" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>Figma</p>
                    <div className='graph'>
                      <span className=''></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    90%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                  <img src="/img/icon/illustratorIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                    <img src="/img/icon/photoshopIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>Illustrator, Photoshop</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    95%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                  <img src="/img/icon/htmlIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                    <img src="/img/icon/cssIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>html, css</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    90%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                  <img src="/img/icon/sassIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>Sass</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    60%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                    <img src="/img/icon/javascriptIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>Javascript</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    70%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                  <img src="/img/icon/reactIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>React</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    70%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                    <img src="/img/icon/nodeIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>Node</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    60%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                    <img src="/img/icon/jquery.gif" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>jQuery</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    90%
                  </span>
                </li>
                <li className='d-flex'>
                  <div className='AboutMeIconBox'>
                    <img src="/img/icon/mysqlIcon.png" alt="figma Icon" className='AboutMeIcon'/>
                    <img src="/img/icon/xml.svg" alt="figma Icon" className='AboutMeIcon'/>
                  </div>
                  <div className='AboutMeSkillgraphBox'>
                    <p>MySQL, xml</p>
                    <div className='graph'>
                      <span className='graph80'></span>
                    </div>
                  </div>
                  <span class="graphTxtDiv">
                    50%
                  </span>
                </li>
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

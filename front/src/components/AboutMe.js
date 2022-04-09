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
          {/* contents 영역  */}
          {/* contents -left */}
          <div>
            <div>
              <p>- 인적사항 -</p>
              <ul>
                <li>권현우 "("1993.04.10")" </li>
                <li>010-6372-9168</li>
                <li>khj930410@naver.com</li>
                <li>서울과학기술대 졸업 "(" 기계공학과 ")"</li>
                <li>MCNEX 기구설계 엔지니어 2년근무</li>
                <li>PWA 프론트엔드 과정"(" 6개월 ")"  수료</li>
                <li>우수훈련생 선발</li>
              </ul>
            </div>
            <div>
              <p>- 자격증 -</p>
              <ul>
                <li>GTQ 포토샵 1급</li>
                <li>웹디자인기능사</li>
                <li>컴퓨터활용 능력 2급</li>
                <li>ITQ 아래한글</li>
                <li>ITQ 한글엑셀</li>
                <li>ITQ 한글파워포인트</li>
                <li>ITQ 인터넷</li>
                <li>구글애널리틱스</li>
                <li>한국사 능력검정시험 2급</li>
                <li>운전면허</li>
              </ul>
            </div>
          </div>
          {/* contents -right */}
          <dvi>
            
          </dvi>
      </div>
    )
  }
}

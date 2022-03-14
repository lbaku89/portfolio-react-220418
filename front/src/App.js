import appStyle from './App.module.css';
import logo from './img/head/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser,faCakeCandles,faLocationDot,faEnvelope,faPhone,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import myPicture from './img/myPicture.jpg'
import tistoyLogo from './img/tistory-logo.svg';
import NaviTogglerDrop from './NaviTogglerDrop';


function App() {
  // toggler onclick
  const [togglerState, togglerUpdate] = useState(false);
  const togglerFL = (t) =>{
    togglerUpdate(t);
  }

 

  return (
   <>
     <nav className="fixed-top" id={appStyle.Navi}>
            <div className="container-lg d-flex justify-content-between" id={appStyle.naviContainer}>
                <a className={appStyle.logoBox} href="#page-top">
                  <img src={logo} className={appStyle.logo +" d-block h-100"} alt="..." />
                </a>
                <button className={appStyle.toggler} type="button" onClick={()=>{togglerFL(!togglerState)}}>
                    <FontAwesomeIcon icon={faBars} className={appStyle.tolgglerIcon}/>
                </button>
                <div className="w-100" id={appStyle.naviBox}>
                    <ul className="d-flex justify-content-end" id={appStyle.navListUl}>                 
                        <li className={appStyle.navList+' d-block'}><a class={appStyle.navListA} href="#services">어바웃미</a></li>
                        <li className={appStyle.navList+' d-block'}><a class={appStyle.navListA} href="#portfolio">포트폴리오</a></li> 
                        <li className={appStyle.navList+' d-block'}><a class={appStyle.navListA} href="#event1">사전인터뷰</a></li>
                    </ul>
                </div>
            </div>
              {togglerState&&<NaviTogglerDrop></NaviTogglerDrop>}     
                             
     </nav>   
     <div className={appStyle.mIntro}>
       <div className={appStyle.mIntroTextBox}>
        <h1>웹 개발자 포트폴리오</h1>
        <hr className={appStyle.hrLine}></hr>
        <h5>기억보다는 <sapn className={appStyle.nanumEB}>기록을!</sapn><br></br>계획보단 <sapn className={appStyle.nanumEB}>직접실천</sapn>을 좋아합니다.</h5>
      </div>
     </div>
     {/* 인적사항 part */}
     <section id={appStyle.aboutMeSection} className="container-lg">
      <div><p className={appStyle.aboutMeTxt +' text-center p-3 mb-0'}>ABOUT ME</p></div>
      <div className='p-3'>
        <img src={myPicture} class="d-block" id={appStyle.myPicture}></img>
      </div>
      <div>
        <div className='row' id={appStyle.aboutMeBox} >
            <div className='p-3 row' >       
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faUser} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>이름</span><p>권현우</p></div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faCakeCandles} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>생년월일</span><br></br>1993.04.10</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faLocationDot} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>거주지</span><br></br>경기도 부천시</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faPhone} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>연락처</span><br></br>010-6372-9168</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faEnvelope} className={appStyle.aboutMeIcon}/>
                <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>e-mail-</span><br></br>khj930410@naver.com</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start align-items-center'>
                <FontAwesomeIcon icon={faGraduationCap} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}><span className={appStyle.aboutMeSubText}>학력</span><br></br>서울과기대 졸업<br></br><span class={appStyle.aboutMeSubText}>(기계공학)</span></div>
              </div>
            </div>
      </div>

      </div>
     </section>




     {/* <button onClick={()=>{snsFL(!snsstate)}}>etc...</button>
            { snsstate && <Snsdiv></Snsdiv> }  */}
    
    {/* 하단 sns Part */}

     {/* <div class="fixed-bottom text-center bg-secondary">
      <div>
      <FontAwesomeIcon icon={faGithub}/>
      <img src={tistoyLogo} className={appStyle.snsLogoImg}></img>
      <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div> */}
 
   </>
  
  );
}

export default App;

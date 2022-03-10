import appStyle from './App.module.css';
import logo from './img/head/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser,faCakeCandles,faLocationDot,faEnvelope,faPhone,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import aboutMe from './img/aboutMe.jpg'
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
     <section id={appStyle.aboutMeSection}>
      <div className='container-lg'>
        <div className='row'>
          <div className='col-sm-6 bg-primary'>
            <img src={aboutMe} className='img-fluid'></img>
          </div>
          <div className='col-sm-6 p-3 row'>
    
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faUser} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>권현우</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faCakeCandles} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>1993.04.10</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faLocationDot} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>경기도 부천시</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faPhone} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>010-6372-9168</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faEnvelope} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>khj930410<br></br>@naver.com</div>
              </div>
              <div className='col-sm-6 col-md-4 d-flex p-3 justify-content-start'>
                <FontAwesomeIcon icon={faGraduationCap} className={appStyle.aboutMeIcon}/>
                  <div className={appStyle.aboutMeText}>서울과기대 졸업<br></br><span class={appStyle.aboutMeSubText}>(기계시스템디자인 공학부)</span></div>
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

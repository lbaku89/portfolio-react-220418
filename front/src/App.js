import appStyle from './App.module.css';
import logo from './img/head/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser,faCakeCandles,faLocationDot,faStairs,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Snsdiv from './Snsdiv';
import { useState } from 'react';

import tistoyLogo from './img/tistory-logo.svg';
import NaviTogglerDrop from './NaviTogglerDrop';

function App() {
  // toggler onclick
  const [togglerState, togglerUpdate] = useState(false);
  const togglerFL = (t) =>{
    togglerUpdate(t);
  }

  // sns box usestate
  const [snsstate, snsUpdate] = useState(false);
  const snsFL = (t) =>{
    snsUpdate(t)
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
          </div>
          <div className='col-sm-6 p-3 row'>
              <div className='col-sm-6 col-md-4 d-flex'>
                <div className='me-1'><FontAwesomeIcon icon={faUser} size="xl"/></div>
                <div>이름 : 권혁중</div>
              </div>
              <div className='col-sm-6 col-md-4'>
                <FontAwesomeIcon icon={faCakeCandles} /> 1993.04.10
              </div>
              <div className='col-sm-6 col-md-4'>
              <FontAwesomeIcon icon={faLocationDot} /> 거주지:경기도 부천
              </div>
              <div className='col-sm-6 col-md-4'> 
              <FontAwesomeIcon icon={faPhone} /> 연락처:010-6732-9168
              </div>
              <div className='col-sm-6 col-md-4'>
              <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className='col-sm-6 col-md-4'>
              <FontAwesomeIcon icon={faStairs} />
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

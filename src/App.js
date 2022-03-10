import appStyle from './App.module.css';
import logo from './img/head/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Snsdiv from './Snsdiv';
import { useState } from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
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
        <h1>- 권현우 -<br></br>웹 개발자 포트폴리오</h1>
        <hr className={appStyle.hrLine}></hr>
        <h5>기억보다는 기록을!<br></br>계획보단 직접실천를 좋아합니다.</h5>
      </div>
     </div>
     <section id={appStyle.aboutMeSection}>
      <div className='container'>

      </div>
     </section>
     <button onClick={()=>{snsFL(!snsstate)}}>etc...</button>
            { snsstate && <Snsdiv></Snsdiv> } 
    
    {/* 하단 sns Part */}
     <div class="fixed-bottom text-center bg-secondary">
      <div className='p-2'>
        <BsGithub className={appStyle.snsLogoImg}/><BsInstagram className={appStyle.snsLogoImg}/><img src={tistoyLogo} className={appStyle.snsLogoImg}></img>
      </div>
    </div>
 
   </>
  
  );
}

export default App;

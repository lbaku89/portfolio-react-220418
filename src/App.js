
import appStyle from './App.module.css';
import logo from './img/head/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Snsdiv from './Snsdiv';
import { useState } from 'react';

function App() {
  const [snsstate, snsUpdate] = useState(false);
  const snsFL = (t) =>{
    snsUpdate(t)
  }
  return (
   <>
     <nav className="navbar navbar-expand-lg fixed-top" id={appStyle.}>
            <div className="container">
                <a className={appStyle.logoBox+" navbar-brand"} href="#page-top">
                  <img src={logo} className={appStyle.logo +" d-block h-100"} alt="..." /></a>
                <button className={appStyle.toggler +" navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <i className="fas fa-bars ms-1"></i>  */}
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarResponsivfe">
                    <ul className="navbar-nav text-uppercase py-4 py-lg-0">                 
                        <li className="nav-item"><a class="nav-link  text-dark fw-bold" href="#services">어바웃미</a></li>
                        <li className="nav-item"><a class=" nav-link  text-dark fw-bold" href="#portfolio">포트폴리오</a></li> 
                        <li className="nav-item"><a class=" nav-link  text-dark fw-bold" href="#event1">사전인터뷰</a></li>
                    </ul>
                </div>
            </div>                             
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

   </>
  );
}

export default App;

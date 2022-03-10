import React from "react"
import appStyle from './App.module.css'

const NaviTogglerDrop = () => {
    return(
    <div id="test" className={appStyle.togglerNavi+' container-lg'+' text-center' +' bg-white'}>
        <ul>                 
            <li ><a class={appStyle.navListA} href="#services">어바웃미</a></li>
            <li ><a class={appStyle.navListA} href="#portfolio">포트폴리오</a></li> 
            <li ><a class={appStyle.navListA} href="#event1">사전인터뷰</a></li>
        </ul>
    </div>    
    ) 
}
export default NaviTogglerDrop ;
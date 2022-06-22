import React, { Component } from 'react';

// react Component import 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,

} from 'reactstrap';

export default class Header extends Component {

  constructor(props){
    super(props);
    this.state = { 
      collapsed:false
    }
  }
  
  toggle = () => { 
    this.setState(
      {collapsed:!this.state.collapsed}
    )
  }
 
  render() {

    document.addEventListener('DOMContentLoaded',function(){

      let didScroll;
      let lastScrollTop = 0;
      let delta = 5; 
      
      window.addEventListener('scroll',function(){
          didScroll = true;
      })

      // 0.25초 마다 scroll 됐는지 확인 
      setInterval(function(){
          if(didScroll){
              hasScrolled();
              didScroll=false;
          }
      },250)

      // didScroll = true 일 경우 진행 
      function hasScrolled(){
          let st = window.scrollY;

          // scroll이 최상단에 있을 때 무조건 navi가 보이게
          if(st===0){
            document.getElementById("NaviNavbar").classList.remove('NaviNavUp');
          }else{
            // scroll이 5보다 적게 움직였을 때 navibar 변경 x 
            if(delta>=Math.abs(st-lastScrollTop)){
              lastScrollTop = st;
              return 0;
            } 
            else{
              if(st-lastScrollTop>0){
                  //scroll 내리면 navibar 없애기
                  document.getElementById("NaviNavbar").classList.add('NaviNavUp')
              }else{
                  //scroll 올리면 navibar 없애기
                  document.getElementById("NaviNavbar").classList.remove('NaviNavUp')
              }
            }
          }
          lastScrollTop = st;
      }
  })


    return (

       <div id="NaviWrap">
        <Navbar
          color="dark"
          dark
          container="sm"
          expand="md"
          fixed="top"
          id='NaviNavbar'
        >
          <NavbarBrand href="#mainPage" className='navLogo'> 
            KHW.
          </NavbarBrand>
          <NavbarToggler id="NaviNavbarToggler" onClick={this.toggle}
           />
          <Collapse id="NaviCollapse"  navbar isOpen={this.state.collapsed}> 
            <Nav
              className="me-auto"
              navbar
              id="NaviNav"
            >
              <NavItem>
                <NavLink href="#AboutMeWrap2" className='NaviNavLink' onClick={this.toggle}>
                  ABOUT ME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#PortfolioWrap2" className='NaviNavLink' onClick={this.toggle}>
                  PORTFOLIO
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#PreInterviewWrap2" className='NaviNavLink' onClick={this.toggle}>
                  PRE-INTERVIEW
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#ContactMeWrap2" className='NaviNavLink' onClick={this.toggle}>
                  CONTACT ME
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

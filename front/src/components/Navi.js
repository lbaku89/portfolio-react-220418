import React, { Component } from 'react';
import $ from 'jquery';

// react Component import 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu,DropdownItem,
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

    // navigation scroll event 구현! 
    $(document).ready(function(){
      // 변수선언
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('#NaviNavbar').outerHeight();

      // 스크롤 터지면 didScroll = true
      $(window).scroll(function(){
        didScroll=true;
      });

      // 0.25초마다 scroll 상태 확인
      setInterval(function(){
        if(didScroll){  
          hasScrolled(); // hasScrolled Function 실행!
          didScroll =false; // didScroll은 0으로 
        }
      },250);

      function hasScrolled(){
        var st = $(window).scrollTop();
        
        if(Math.abs(lastScrollTop-st)<=delta)
          return;

        if(st>lastScrollTop && st>navbarHeight){
          $('#NaviNavbar').addClass('NaviNavUp')
        }else{

          if(st+$(window).height()<$(document).height()){
            $('#NaviNavbar').removeClass('NaviNavUp')
          }
        }
        lastScrollTop=st;
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
                <NavLink href="#AboutMeWrap" className='NaviNavLink'>
                  ABOUT ME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#PortfolioWrap" className='NaviNavLink'>
                  PORTFOLIO
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#PreInterviewWrap" className='NaviNavLink'>
                  PRE-INTERVIEW
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#ContactMeWrap" className='NaviNavLink'>
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

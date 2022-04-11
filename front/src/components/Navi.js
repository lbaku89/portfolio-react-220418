import React, { Component } from 'react';
import $ from 'jquery';

// react Component import 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,
        } from 'reactstrap';

export default class Header extends Component {
  
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
          color="light"
          container="sm"
          expand
          fixed="top"
          light
          id='NaviNavbar'
        >
          <NavbarBrand href="/" className='navLogo'> 
            KHW.
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar id="NaviCollapse">
            <Nav
              className="me-auto"
              navbar
              id="NaviNav"
            >
              <NavItem>
                <NavLink href="/components/" className='NaviNavLink'>
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='NaviNavLink'>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className='NaviNavLink'>
                  Pre Interview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='NaviNavLink'>
                  Contact me
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

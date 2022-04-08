import React, { Component } from 'react';
import $ from 'jquery';

// react Component import 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,
         DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class Header extends Component {
  render() {

    var lastScrollTop=0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('#NaviNavbar').outerHeight;
    
    var didScroll;
  

    $(window).scroll(function(event){
      didScroll = true;
    })

    setInterval(function(){
      if(didScroll){
        hasScrolled();
        didScroll = false;
      }
    }, 250);
    
    function hasScrolled(){ 
      var st = $(this).scrollTop(); 
      // Make sure they scroll more than delta 
      if(Math.abs(lastScrollTop - st) <= delta) 
      return; 
      
      // If they scrolled down and are past the navbar, add class .nav-up.
       // This is necessary so you never see what is "behind" the navbar. 
       if (st > lastScrollTop && st > navbarHeight){ 
         // Scroll Down 
         $('#NaviNavbar').removeClass('NaviNavDown').addClass('NaviNavUp'); 
        }else { 
          // Scroll Up 
          if(st + $(window).height() < $(document).height()){ 
            $('#NaviNavbar').removeClass('NaviNavUp').addClass('NaviNavDown');
           } 
          } lastScrollTop = st; 
        }

    return (
      <div id="NaviWrap">
        <Navbar
          color="light"
          container="sm"
          expand="sm"
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
              <NavItem className='NaviNavItem'>
                <NavLink href="/components/">
                  About me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  Pre Interview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Contact me
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

import React, { Component } from 'react';


// react Component import 
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,
         DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

      

export default class Header extends Component {
  render() {
    return (
      <div id="s.wrap">
        <Navbar
          color="light"
          container="sm"
          expand="sm"
          fixed="top"
          light
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

import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Header.css";

class Header extends Component {
  
  render() {
    return(
      <Navbar brand='logo' right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    )
  }
}

export default Header;
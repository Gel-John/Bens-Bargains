import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Header.css";

class Header extends Component {
  
  render() {
    return (
      <Navbar brand="Ben's Bargains" right>
        <NavItem href='#'>Getting started</NavItem>
        <NavItem href='./login'>Login</NavItem>
      </Navbar>
    )
  }
}

export default Header;

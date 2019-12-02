import React, { Component } from "react"; // 1
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"; // 2
import { ASPNET_CV_URL_live } from "../constants";
class AppHeader extends Component {
  // 3
  state = {
    // 4
    isOpen: false
  };
  toggle = this.toggle.bind(this); // 5
  toggle() {
    // 6
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    var icon = (
      <span class="logo">
        <a href="/">
          <img
            src="../images/Shirt.png"
            height="33"
            width="120"
            alt="text here"
          />
        </a>
      </span>
    );
    // 7
    return (
      <Navbar color="dark" dark expand="md" brand={icon}>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={ASPNET_CV_URL_live}>Go to Asp CV</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                World
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/">For U</DropdownItem>
                <DropdownItem>For Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default AppHeader; // 8

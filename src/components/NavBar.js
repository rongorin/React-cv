import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link, BrowserRouter, Route } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar">
          <NavLink to="/" className="navbar-logo">
            dA
          </NavLink>
          <NavLink
            to="/faq"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            FAQs
          </NavLink>
          <div className="navbar-list">
            <NavLink to="/search" activeClassName="chosen">
              Collection
            </NavLink>

            <NavLink to="/map" activeClassName="chosen">
              Map
            </NavLink>

            <NavLink to="/login" activeClassName="chosen">
              Log In
            </NavLink>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;

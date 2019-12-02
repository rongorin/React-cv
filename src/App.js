import React, { Component, Fragment } from "react";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
//import AppFooter from './components/AppFooter';
class App extends Component {
  render() {
    return (
      <Fragment>
        <AppHeader />
        {/* <Navbar /> */}
        <Home />
      </Fragment>
    );
  }
}
export default App;

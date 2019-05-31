import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainPopup from "./components/MainPopup";
import SideBar from "./components/SideBar";
import "./scss/style.scss";
import { connect } from "react-redux";

function App(props) {
  const { isSidebarOpen } = props;
  return (
    <div className="App">
      <Header />

      {MainPopup && <MainPopup />}
    </div>
  );
}

export default connect(
  state => ({ ...state }),
  dispatch => ({ dispatch })
)(App);

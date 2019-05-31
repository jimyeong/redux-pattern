import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Action from "../actions/action";
import { connect } from "react-redux";

import cn from "classnames";

function Header(props) {
  const { dispatch, isSideBarOpen } = props;
  console.log(isSideBarOpen);
  return (
    <React.Fragment>
      <div className={cn("Header")}>
        Header
        <button
          onClick={() => {
            dispatch(Action.Creators.isSideBarOpen());
          }}
          className="btn btn-open"
        />
        {isSideBarOpen && <SideBar />}
      </div>
    </React.Fragment>
  );
}
export default connect(
  state => ({ ...state }),
  dispatch => ({ dispatch })
)(Header);

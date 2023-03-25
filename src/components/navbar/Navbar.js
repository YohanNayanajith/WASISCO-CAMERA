import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo/wasisco.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={props.display ? "navbar-cnt navbar-display" : "navbar-cnt"}>
      <div className="mobile-menu-row">
        <div onClick={props.mainSectionClick} className="navbar-img-cnt">
          <img src={logo} alt="" className="navbar-img" />
        </div>
        <div
          onClick={() => {
            clicked ? setClicked(false) : setClicked(true);
          }}
          className="navbar-menu"
        >
          <FontAwesomeIcon
            style={{ fontSize: 25, color: "black" }}
            icon={faBars}
          />
        </div>
      </div>
      <div
        className={
          clicked && props.display
            ? "mobile-menu-item-cnt-display"
            : "mobile-menu-item-cnt"
        }
      >
        <div
          onClick={() => {
            props.wasiscoImageSectionClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          HOME
        </div>
        <div
          onClick={() => {
            props.wasiscoImageSectionClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          SERVICES
        </div>
        <div
          onClick={() => {
            props.timelineClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          RECENT
        </div>

        <div
          onClick={() => {
            props.praposalSubmissionClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          BLOGS
        </div>
        <div
          onClick={() => {
            props.pricesClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          ABOUT
        </div>
        <div
          onClick={() => {
            props.contactClick();
            setClicked(false);
          }}
          className="mobile-row"
        >
          CONTACT
        </div>
      </div>

      <div className="navbar-items">
        <div className="navbar-item-cnt"></div>
        <div className="navbar-item-cnt"></div>
        <div className="navbar-item-cnt">
          <div onClick={props.wasiscoImageSectionClick}>HOME</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.wasiscoImageSectionClick}>SERVICES</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.timelineClick}>RECENT</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.praposalSubmissionClick}>BLOGS</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.pricesClick}>ABOUT</div>
          <div className="navbar-not-clicked"></div>
        </div>

        <div className="navbar-item-cnt">
          <div onClick={props.contactClick}>CONTACT</div>
          <div className="navbar-not-clicked"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

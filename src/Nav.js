import React, { useEffect, useState } from "react";
import "./Nav.css"; // ### import the css file for the navbar

function Nav() {
  /** useState to change the navbar background
   * setNavBar is used for setting value of navbar
   */
  const [navbar, setNavBar] = useState(false);

  /**
   * function to check the scroll value and change navbar value
   */
  const transitionNavBar = () => {
    // if scrollY (vertically) is more than 100 setnavbar to true
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      //else set to false
      setNavBar(false);
    }
  };

  // * a scroll event listener to call the function #transitionNavBar()
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [navbar]);

  return (
    <div className={navbar ? "nav nav__black" : "nav"}>
      {/* 
        * 
      
      */}
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;

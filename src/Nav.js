import React, { useEffect, useState } from "react";
// import "./Nav.css"; // ### import the css file for the navbar
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import NavOptions from "./NavOptions";

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
    // console.log(window.scrollY);
    if (window.scrollY >= 100) {
      setNavBar(true);
    } else {
      //else set to false
      setNavBar(false);
    }
  };

  /** a scroll event listener to call the function #transitionNavBar()
   * removeEventListener used for clearing the event listener after its called to keep the memory clean or something
   * ? Or maybe something else, dont really understand currently
   */
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  //From React router to keep track of page history to go back and forth
  const history = useHistory();

  return (
    <div
      className={
        navbar ? "nav bg-black transition-all duration-300 ease-in" : "nav"
      }
    >
      <div className="flex justify-between text-lg items-center font-semibold">
        <div className="flex">
          <img
            onClick={() => {
              history.push("./");
            }}
            className="w-20 mt-1 object-contain"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
          {/* //TODO: add hidden md:flex to display nav only in
           medium to upwards screen */}

          <NavOptions link="/" title="Home" />
          <NavOptions link="/movies" title="Movie" />
          <NavOptions link="/tvseries" title="TV Series" />

          {/* <div className="hidden md:flex ml-4 justify-between text-gray-200 space-x-3 hover:text-gray-100">
            <h3>
              <Link to="/movies">Movies</Link>
            </h3>
            <h3>
              <Link to="/tvseries">TV Series</Link>
            </h3>
          </div> */}
        </div>

        <div className="flex text-white space-x-2 items-center">
          <FontAwesomeIcon icon={faSearch} className=" mr-4" />
          <img
            onClick={() => history.push("./profile")}
            className="w-8 object-contain cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <FontAwesomeIcon
            icon={faCaretDown}
            className="flex cursor-pointer text-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React, { useEffect, useRef, useState } from "react";

import SigninScreen from "./SigninScreen";
import { Link, useHistory } from "react-router-dom";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const [focus, setFocus] = useState(false);

  const history = useHistory();

  let clickRef = useRef();

  useEffect(() => {
    //function to check if the mouse is clicked outside input form
    const handler = (event) => {
      //if focus is false, text in label returns to original position
      //acting as a placeholder
      //else it moves a bit upward for the user to type their input
      if (
        !clickRef.current.contains(event.target) &&
        clickRef.current.value == ""
      ) {
        //checking if mouse is clicked outside the input and input is empty string
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const signInScreen = () => {
    console.log("hello");
    <Link to="/signin"></Link>;
  };

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/05f7f3d2-dc99-45e5-a338-7a450079a1ca/NP-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
      }}
    >
      <div className=" relative">
        <img
          className="fixed top-0 left-2 w-40 object-contain pl-5 text-white"
          src="../../public/netflix-logo.png"
          alt="Netflix"
        />

        <button
          className="text-white bg-main absolute top-5 right-10 cursor-pointer p-2 px-4 outline-none border-none text-base border rounded-sm"
          onClick={() => history.push("./signin")}
        >
          Sign In
        </button>

        <div className="z-1 h-screen w-full bg-opacity-40 bg-black bg-gradient-to-t from-gray50 via-transparent to-gray50 "></div>
      </div>

      {/* {signIn ? (
        <Link to="/signin" />
      ) : ( */}
      <div className="absolute top-1/4 lg:top-1/3 m-auto left-0 right-0 bottom-0 p-5 text-center text-white ">
        <h1 className=" max-w-xl lg:max-w-2xl mx-auto my-0 text-3xl md:text-5xl font-bold ">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className=" max-w-xl text-xl md:text-2xl my-4 mx-auto">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className=" text-lg md:text-xl pb-5 ">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="my-0 md:my-2.5">
          <form className=" grid grid-cols-1 justify-center items-center lg:flex ">
            <div className="flex flex-col relative w-full md:w-3/4  lg:w-1/3 max-w-screen-sm m-auto lg:m-0">
              <input
                className="p-2.5 w-full h-12 md:min-h-60 outline-none border-none text-gray-700 rounded-sm lg:rounded-tl-sm lg:rounded-bl-sm text-sm md:text-base"
                type="email"
                onFocus={() => setFocus(true)}
                required
                ref={clickRef}
              />

              <label className="w-full h-full absolute bottom-0 pointer-events-none px-2.5">
                <span
                  className={`absolute px-2.5 bottom-3 md:bottom-4 left-0 text-gray-500 transform-gpu ${
                    focus
                      ? " text-xs translate-y-150 md:text-sm"
                      : "translate-y-0  text-sm md:text-base"
                  } transition-all duration-200 `}
                >
                  Email address
                </span>
              </label>
            </div>

            <button
              className=" m-auto lg:m-0 lg:w-1/6 bg-main lg:h-xl hover:bg-red-600 lg:text-2xl p-2.5 mt-4 px-5 rounded-sm lg:rounded-tr-sm lg:rounded-br-sm "
              // onClick={() => setSignIn(true)}
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default LoginScreen;

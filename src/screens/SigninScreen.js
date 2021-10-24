import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase";
// import "./SigninScreen.css";

function SigninScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);

        //sending email verification to the user email
        // sendEmailVerification(auth.currentUser).then(() => {
        //   alert("An email verification has been sent");
        // });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const singIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/05f7f3d2-dc99-45e5-a338-7a450079a1ca/NP-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
      }}
    >
      <div className="absolute top-15 max-w-lg left-0 right-0 bottom-0 mx-auto text-white p-16 bg-gray50">
        <form className="grid flex-col">
          <h1 className="text-left mb-6 font-bold text-4xl">Sign In</h1>
          <input
            ref={emailRef}
            className="mb-3 px-4 py-1 h-12 bg-netflixgray rounded"
            placeholder="Email"
            type="email"
          />
          <input
            ref={passwordRef}
            className="mb-3 px-4 py-1 h-12 bg-netflixgray rounded"
            placeholder="Password"
            type="password"
          />
          <button
            type="submit"
            className="bg-main h-12 rounded mt-5 font-semibold"
            onClick={singIn}
          >
            Sign In
          </button>

          <h4 className="font-light mt-6 text-gray-400">
            <span> New to Netflix? </span>
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={register}
            >
              Sign up now.
            </span>
          </h4>
        </form>
      </div>

      <div className="z-1 h-screen w-full bg-opacity-40 bg-black bg-gradient-to-t from-gray50 via-transparent to-gray50 "></div>
    </div>
  );
}

export default SigninScreen;

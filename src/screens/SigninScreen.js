import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./SigninScreen.css";

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
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          className="signInScreen__email"
          placeholder="Email"
          type="email"
        />
        <input
          ref={passwordRef}
          className="signInscreen__password"
          placeholder="Password"
          type="password"
        />
        <button type="submit" className="signInScreen_button" onClick={singIn}>
          Sign In
        </button>

        <h4>
          <span> New to Netflix? </span>
          <span className="signup__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SigninScreen;

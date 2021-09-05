import React, { useState } from "react";
import "./LoginScreen.css";
import SigninScreen from "./SigninScreen";

function LoginScreen() {
  const [singIN, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      {singIN ? (
        <SigninScreen />
      ) : (
        <div className="loginScreen__body">
          <h1 className="hero__title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="hero__subtitle">Watch anywhere. Cancel anytime.</h2>
          <h3 className="hero__paragraph">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button
                className="email__button"
                onClick={() => setSignIn(true)}
                type="submit"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginScreen;

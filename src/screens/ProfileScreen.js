import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email} </h2>

            <div className="profileScreen__plans">
              <h3>Plans (Current Plan:) </h3>
              <p>Renewal Date: {Date.now}</p>

              <div className="subscribe__plans">
                <div className="standard">
                  <div className="quality__text">
                    <h4>Netflix Standard</h4>
                    <span>1080p</span>
                  </div>
                  <button className="subscribe__button">Subscribe</button>
                </div>
                <div className="basic">
                  <div className="quality__text">
                    <h4>Netflix Basic</h4>
                    <span>480p</span>
                  </div>
                  <button className="subscribe__button">Subscribe</button>
                </div>
                <div className="premium">
                  <div className="quality__text">
                    <h4>Netflix Premium</h4>
                    <span>4k+HDR</span>
                  </div>
                  <button className="subscribe__button">Subscribe</button>
                </div>
              </div>

              <button
                onClick={() => {
                  signOut(auth);
                }}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

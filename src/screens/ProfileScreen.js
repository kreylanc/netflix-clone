import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import SubPlans from "./SubPlans";
// import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className=" h-screen bg-black text-white">
      <Nav />
      <div className="h-screen flex flex-col w-full lg:w-2/3 m-auto max-w-3xl p-8 py-20 md:p-24">
        <h1 className=" text-3xl md:text-6xl font-bold border-b border-gray-400 mb-5 py-3">
          Edit Profile
        </h1>

        <div className="flex">
          <img
            className=" h-12 md:h-24 object-contain"
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />

          <div className="flex-1 ml-5">
            <h2 className=" bg-gray-500 py-3 px-4 rounded-sm">{user.email} </h2>

            <div className=" text-sm md:text-base mt-4">
              <h3 className="border-b border-gray-400 pb-3">
                Plans (Current Plan: Premium){" "}
              </h3>
              <p className="mt-2">Renewal Date: {Date.now}</p>

              <SubPlans title="Netflix Standard" subtitle="1080p" />
              <SubPlans title="Netflix Basic" subtitle="480p" />
              <SubPlans title="Netflix Premium" subtitle="4k + HDR" />

              <button
                onClick={() => {
                  signOut(auth);
                }}
                className="bg-main w-full px-5 py-2 mt-4 rounded outline-none border-none text-base lg:opacity-90 hover:opacity-100"
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

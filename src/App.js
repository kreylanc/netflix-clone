import React, { Suspense, useEffect } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./screens/SigninScreen";

//lazy method used for loading the component only when needed
//makes it so not all component are loaded at the same time to save bandwidth and speed
const LazyHome = React.lazy(() => import("./screens/HomeScreen"));
const LazyMovie = React.lazy(() => import("./screens/MovieScreen"));
const LazyTv = React.lazy(() => import("./screens/TvScreen"));
const LazyProfile = React.lazy(() => import("./screens/ProfileScreen"));
const LazySignin = React.lazy(() => import("./screens/SigninScreen"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //login user
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    //Cleaning up
    return unsubscribe;
  }, [dispatch]);

  const user = useSelector(selectUser);
  return (
    <div className="">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Router>
        {!user ? (
          <Switch>
            <Route exact path="/">
              <LoginScreen />
            </Route>
            <Route exact path="/signin">
              <SigninScreen />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/">
                <LazyHome />
              </Route>

              <Route exact path="/profile">
                <LazyProfile />
              </Route>
              <Route exact path="/movies">
                <LazyMovie />
              </Route>
              <Route exact path="/tvseries">
                <LazyTv />
              </Route>
            </Suspense>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

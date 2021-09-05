import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const dispatch = useDispatch();

  const history = useHistory();

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
    <div className="app">
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/Profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

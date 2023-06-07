import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  console.log(!sessionStorage.getItem("token"));
  return (
    <>
      <Router>
        <BrowserRouter>
          <div>
            <Route
              exact
              path='/login'
              component={Login}
              // render={() => {
              //   if (sessionStorage.getItem("token")) {
              //     return <Redirect to='/' />;
              //   } else {
              //     return <Login />;
              //   }
              // }}
            />

            <Route
              exact
              path='/home'
              // render={() => {
              //   if (!sessionStorage.getItem("token")) {
              //     return <Redirect to={"/login"} />;
              //   }
              // }}
              component={Home}
            />

            <Redirect from='/' to={sessionStorage.getItem("token") ? '/home' : '/login'} />
          </div>
        </BrowserRouter>
      </Router>
      <Toaster />
    </>
  );
}

export default App;

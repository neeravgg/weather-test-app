import React from "react";
import { Toaster } from "react-hot-toast";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { Route, Redirect } from "react-router-dom";

function Routes() {
  return (
    <>
      <Route exact path='/login' component={Login} />

      <Route exact path='/home' component={Home} />

      <Redirect
        from='/'
        to={sessionStorage.getItem("token") ? "/home" : "/login"}
      />
      <Toaster />
    </>
  );
}

export default Routes;

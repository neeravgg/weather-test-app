import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path='/login'
            render={() => {
              if (sessionStorage.getItem("token")) {
                return <Redirect to='/app' />;
              } else {
                return <Login />;
              }
            }}
          />
          {/* <Route path='/create-account' component={CreateAccount} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/user/reset-password' component={ResetPassword} /> */}

          <Route
            path='/app'
            render={() => {
              if (!sessionStorage.getItem("token")) {
                return <Redirect to={"/login"} />;
              }
            }}
          />

          <Redirect exact from='/' to='/login' />
        </Switch>
      </Router>
      <Toaster />
    </>
  );
}

export default App;

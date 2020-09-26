import React from "react";
import Home from "./components/Home/Home";
import Academics from "./components/Academics/Academics";
import Ask from "./components/Ask/Ask";
import Programming from "./components/Programming/Programming";
import Qna from "./components/Qna/Qna";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import QaState from "./context/Qa/QaState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <div className="App">
      <AuthState>
        <AlertState>
          {/* <QaState> */}
          <Router>
            <div className="container">
              <Navbar />
              <br />
              <PrivateRoute exact path="/" exact component={Home} />
              <PrivateRoute exact path="/Academics" component={Academics} />
              <PrivateRoute exact path="/Ask" component={Ask} />
              <PrivateRoute exact path="/Programming" component={Programming} />
              <PrivateRoute exact path="/Qna" component={Qna} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </Router>
          {/* </QaState> */}
        </AlertState>
      </AuthState>
    </div>
  );
}

export default App;

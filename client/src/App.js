import React from "react";
import Home from "./components/Home/Home";
import Academics from "./components/Academics/Academics";
import Ask from "./components/Ask/Ask";
import Programming from "./components/Programming/Programming";
import Qna from "./components/Qna/Qna";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/" exact component={Home} />
          <Route exact path="/Academics" component={Academics} />
          <Route exact path="/Ask" component={Ask} />
          <Route exact path="/Programming" component={Programming} />
          <Route exact path="/Qna" component={Qna} />
        </div>
      </Router>
    </div>
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import "./Home.css";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div class="content">
        <div class="info">
          <h2>
            Query Solver <br />
            <span>Be Creative!</span>
          </h2>
          <p>
            This is a website used by students and professors of Information
            Technology Branch to discuss questions and answers of programming
            and academics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

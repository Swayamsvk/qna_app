import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import "./Home.css";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  return <div className="Home">Home</div>;
};

export default Home;

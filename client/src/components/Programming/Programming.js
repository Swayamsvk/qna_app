import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";
import AuthContext from "../../context/auth/authContext";
import "./Programming.css";

const Programming = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/Qnas/").then((response) => {
      setData(response.data.filter((cnt) => cnt.subject == "programming"));
    });
  }, []);

  const dataList = () => {
    return data.map((currentdata) => {
      return <Show data={currentdata} key={currentdata._id} />;
    });
  };

  return (
    <div>
      <div className="head">Programming</div>

      <div>{dataList()}</div>
    </div>
  );
};

export default Programming;

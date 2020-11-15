import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";
import AuthContext from "../../context/auth/authContext";

const Academics = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/Qnas/").then((response) => {
      setData(response.data.filter((cnt) => cnt.subject == "academics"));
    });
  }, []);

  const dataList = () => {
    return data.map((currentdata) => {
      return <Show data={currentdata} key={currentdata._id} />;
    });
  };

  return (
    <div>
      <div>Academics</div>

      <tbody>{dataList()}</tbody>
    </div>
  );
};

export default Academics;

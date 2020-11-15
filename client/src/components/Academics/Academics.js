import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./Show";

const Academics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/Qnas/").then((response) => {
      setData(response.data.filter((cnt) => cnt.subject == "lol"));
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

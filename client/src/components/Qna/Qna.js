import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Show from "./Show";
import AuthContext from "../../context/auth/authContext";

const Qna = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  const [question, setQuestion] = useState({
    qnas: [],
  });

  const { qnas } = question;

  useEffect(() => {
    axios.get("http://localhost:5000/Qas/").then((response) => {
      console.log(response);
      setQuestion({
        qnas: response.data,
      });
    });
  }, []);

  console.log(question);

  const questionList = () => {
    console.log("questionslist");
    return question.qnas.map((currentQuestion) => {
      console.log(currentQuestion);
      return <Show questions={currentQuestion} key={currentQuestion._id} />;
    });
  };
  return (
    <div>
      <div>Questions</div>
      <p>{questionList()}</p>
    </div>
  );
};

export default Qna;

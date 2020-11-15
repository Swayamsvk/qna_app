import React, { useState, useEffect } from "react";
import axios from "axios";

const Write = (props) => {
  const [qna, setQna] = useState({
    name: "",
    occupation: "",
    subject: "",
    question: "",
  });
  const [answer, setAnswer] = useState("");

  const { name, occupation, subject, question } = qna;

  useEffect(() => {
    axios
      .get("http://localhost:5000/Qas/" + props.match.params.id)
      .then((response) => {
        setQna({
          name: response.data.name,
          occupation: response.data.occupation,
          subject: response.data.subject,
          question: response.data.question,
        });
      });
  }, []);

  const onChange = (e) => setQna({ ...qna, [e.target.name]: e.target.value });
  const changeAnswer = (e) => setAnswer(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const Qnas = {
      name: name,
      occupation: occupation,
      subject: subject,
      question: question,
      answer: answer,
    };

    console.log(Qnas);

    axios
      .post("http://localhost:5000/Qnas/addqna", Qnas)
      .then((res) => console.log(res.data));

    window.location = "/qna";
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
        disabled={true}
      />
      <input
        type="text"
        placeholder="occupation"
        name="occupation"
        value={occupation}
        onChange={onChange}
        disabled={true}
      />
      <input
        type="text"
        placeholder="subject"
        name="subject"
        value={subject}
        onChange={onChange}
        disabled={true}
      />
      <input
        type="text"
        placeholder="question"
        name="question"
        value={question}
        onChange={onChange}
        disabled={true}
      />
      <input
        type="text"
        placeholder="answer"
        name="answer"
        value={answer}
        onChange={changeAnswer}
      />
      <input type="submit" value="add question" />
    </form>
  );
};

export default Write;

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/auth/authContext";

const Ask = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);
  const [ask, setAsk] = useState({
    name: "",
    occupation: "",
    subject: "",
    question: "",
  });

  const { name, occupation, subject, question } = ask;

  const onChange = (e) => setAsk({ ...ask, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const Qnas = {
      name: name,
      occupation: occupation,
      subject: subject,
      question: question,
    };

    console.log(Qnas);

    axios
      .post("http://localhost:5000/Qas/add", Qnas)
      .then((res) => console.log(res.data));

    window.location = "/Ask";
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="occupation"
        name="occupation"
        value={occupation}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="subject"
        name="subject"
        value={subject}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="question"
        name="question"
        value={question}
        onChange={onChange}
      />
      <input type="submit" value="add question" />
    </form>
  );
};

export default Ask;

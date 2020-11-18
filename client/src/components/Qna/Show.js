import React from "react";
import { Link } from "react-router-dom";
const Show = (props) => (
  <div style={{ paddingLeft: 20 }}>
    Name<p>{props.questions.name}</p>
    <br />
    Occupation<p>{props.questions.occupation}</p>
    <br />
    Subject<p>{props.questions.subject}</p>
    <br />
    Question<p>{props.questions.question}</p>
    <br />
    <p>
      <Link to={"/qnas/" + props.questions._id}>Answer</Link> |{" "}
    </p>
    <br />
  </div>
);

export default Show;

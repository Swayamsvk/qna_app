import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Show = (props) => (
  <tr>
    <td>{props.question.name}</td>
    <td>{props.question.occupation}</td>
    <td>{props.question.subject}</td>
    <td>{props.question.question}</td>
    <td>
      <Link to={"/qnas/" + props.question._id}>edit</Link> |{" "}
    </td>
  </tr>
);

export default class Qna extends Component {
  constructor(props) {
    super(props);

    this.state = { questions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Qas/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  questionList() {
    return this.state.questions.map((currentquestion) => {
      return <Show question={currentquestion} key={currentquestion._id} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thread className="thread-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thread>
          <tbody>{this.questionList()}</tbody>
        </table>
      </div>
    );
  }
}

//in hooks show should call individual elements such as name,occupation

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import Show from "./Show";

// const Show = (props) => {
//   // console.log(props.questions);
//   console.log("show called");
//   return (
//     <div>
//       <tr>
//         <td>{props.questions}</td>
//       </tr>
//       {/* <p>
//         <Link to={"/qnas/" + props.exercise._id}>edit</Link> |{" "}
//       </p> */}
//     </div>
//   );
// };

// const Qna = () => {
//   const [question, setQuestion] = useState({
//     qnas: [],
//   });

//   const { qnas } = question;

//   useEffect(() => {
//     axios.get("http://localhost:5000/Qas/").then((response) => {
//       console.log(response);
//       setQuestion({
//         qnas: response.data,
//       });
//     });
//   }, []);

//   console.log(question);

//   const questionList = () => {
//     console.log("questionslist");
//     return question.qnas.map((currentQuestion) => {
//       console.log(currentQuestion);
//       return <Show questions={currentQuestion} key={currentQuestion._id} />;
//     });
//   };
//   return (
//     <div>
//       <div>Questions</div>
//       <p>{questionList()}</p>
//     </div>
//   );
// };

// export default Qna;

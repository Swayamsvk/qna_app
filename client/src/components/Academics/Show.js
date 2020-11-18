import React from "react";

const Show = ({ data }) => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <p>Q: {data.question}</p>
      <br />
      <p>A: {data.answer}</p>
      <br />
    </div>
  );
};

export default Show;

import React from "react";

const Show = ({ data }) => {
  return (
    <div>
      <tr>
        <td>{data.question}</td>
        <td>{data.answer}</td>
      </tr>
    </div>
  );
};

export default Show;

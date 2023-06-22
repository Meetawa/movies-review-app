import React from "react";

const Content = (props) => {
  console.log(props.title);
  return (
    <div className="content">
      <img src="" alt="no Image" />
      <p>{props.title}</p>
      <p>{props.Year}</p>
    </div>
  );
};

export default Content;

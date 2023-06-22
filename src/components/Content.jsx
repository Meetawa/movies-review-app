import React from "react";

const Content = (props) => {
  console.log(props.posterImg);
  return (
    <div className="content">
      <img src={props.posterImg} alt=" " />
      <p>{props.title}</p>
      <p>Year : {props.Year}</p>
    </div>
  );
};

export default Content;

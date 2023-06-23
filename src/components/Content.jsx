import React from "react";

const Content = (props) => {
  return (
    <div className="content">
      <img src={props.posterImg} alt=" " />
      <p>Name : {props.title}</p>
      <p>Year : {props.Year}</p>
      <p>Rating : {props.rating}</p>
    </div>
  );
};

export default Content;

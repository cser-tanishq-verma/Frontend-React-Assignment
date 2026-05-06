import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <>
      <div>Parent</div>
      <h1>Surname of parent: {props.value.surname}</h1>
      <Child value={props} {...{ ...props }} />
    </>
  );
};

export default Parent;

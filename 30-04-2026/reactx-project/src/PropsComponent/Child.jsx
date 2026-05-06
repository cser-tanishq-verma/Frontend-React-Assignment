import React from "react";

const Child = (childProps) => {
  console.log(childProps);
  return (
    <>
      <div>
        <div>Child</div>
        <h1>Surname of child: {childProps.value.surname}</h1>
      </div>
    </>
  );
};

export default Child;

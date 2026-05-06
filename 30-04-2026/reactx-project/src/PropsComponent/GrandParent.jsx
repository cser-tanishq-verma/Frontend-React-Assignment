import React from "react";
import Parent from "./Parent";

const GrandParent = () => {
  return (
    <>
      <div>GrandParent</div>
      <Parent value={{ surname: "Doe" }} />
    </>
  );
};

export default GrandParent;

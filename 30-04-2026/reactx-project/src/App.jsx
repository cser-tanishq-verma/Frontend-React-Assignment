import React from "react";
import ContextComponent from "./ContextComponent/ContextComponent";
import ContextParent from "./ContextComponent/ContextParent";

const App = () => {
  return (
    <ContextComponent>
      <ContextParent />
    </ContextComponent>
  );
};

export default App;

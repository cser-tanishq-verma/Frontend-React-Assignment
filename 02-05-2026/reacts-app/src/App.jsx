import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";

const App = () => {
  return (
    <Provider store={store}>
      <Component2 />
      <Component1 />
    </Provider>
  );
};

export default App;

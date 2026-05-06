import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAPI } from "../redux/Reducer";

const Component2 = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  let dispatch = useDispatch();

  function handleChange(e) {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div style={{ border: "1px solid blue", padding: "20px", margin: "20px" }}>
      <h3>Add Data</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addUserAPI(state));
        }}
      >
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br />
        <br />

        <input name="email" placeholder="Email" onChange={handleChange} />
        <br />
        <br />

        <input name="password" placeholder="Password" onChange={handleChange} />
        <br />
        <br />

        <button>Add</button>
      </form>
    </div>
  );
};

export default Component2;

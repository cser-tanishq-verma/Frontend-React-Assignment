import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Feature/userSlice";

const ComponentRTK1 = () => {
  let data = useSelector((prev) => prev.user.user);
  let dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>RTK Users</h3>

      <button onClick={() => dispatch(addUser("Aditya"))}>Add User</button>

      {data.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  );
};

export default ComponentRTK1;

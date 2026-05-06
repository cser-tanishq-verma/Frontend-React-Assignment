import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {await axios.post("/api/user", { name });  setStatus("success");} 
    catch (err) {  setStatus("error");}   };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && <p>Success!</p>}
      {status === "error" && <p>Error occurred</p>}
    </form>
  );
};

export default UserForm;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAPI, deleteUserAPI, updateUserAPI } from "../redux/Reducer";

const Component1 = () => {
  let { user, loading } = useSelector((state) => state);
  let dispatch = useDispatch();

  let [editId, setEditId] = useState(null);
  let [editData, setEditData] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]);

  return (
    <div style={{ border: "1px solid blue", padding: "20px", margin: "20px" }}>
      <h3>User Data</h3>

      {loading && <p>Loading...</p>}

      {user.map((u) => (
        <div key={u.id} style={{ marginBottom: "20px" }}>
          {editId === u.id ? (
            <>
              <input
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
              <input
                value={editData.email}
                onChange={(e) =>
                  setEditData({ ...editData, email: e.target.value })
                }
              />
              <button
                onClick={() => {
                  dispatch(updateUserAPI(u.id, editData));
                  setEditId(null);
                }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p>
                {u.name} - {u.email}
              </p>

              <button onClick={() => dispatch(deleteUserAPI(u.id))}>
                Delete
              </button>

              <button
                onClick={() => {
                  setEditId(u.id);
                  setEditData(u);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Component1;

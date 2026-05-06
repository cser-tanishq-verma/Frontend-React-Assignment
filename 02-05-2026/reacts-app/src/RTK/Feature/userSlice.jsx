import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let userSlice = createSlice({
  name: "userSlice",
  initialState: { user: [] },
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export let { addUser } = userSlice.actions;
export default userSlice.reducer;

export const addUserAPI = (data) => async (dispatch) => {
  await axios.post("http://localhost:3001/user", {
    name: data,
    email: "test@test.com",
    password: "123",
  });

  dispatch(addUser(data));
};

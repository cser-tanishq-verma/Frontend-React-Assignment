import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Feature/userSlice";

export let store = configureStore({ reducer: { user: userReducer } });

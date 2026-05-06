import {configureStore} from '@reduxjs/toolkit';
import userReducer from './feature/UserSlice.jsx';
export let store = configureStore({reducer:{
    user:userReducer
}})
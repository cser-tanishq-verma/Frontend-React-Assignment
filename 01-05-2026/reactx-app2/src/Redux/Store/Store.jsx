import {createStore, combineReducers} from "redux"
import { reducerFunction } from "../Reducer/ReducerProvider"
import { userReducer } from "../Reducer/UserReducer"

const rootReducer = combineReducers({
  counter: reducerFunction,
  users: userReducer
})

export let store=createStore(rootReducer)

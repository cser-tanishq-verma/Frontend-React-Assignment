import { fetchUser, pendingUser } from "./Action";
import { apiInstance } from "./AxiosInstance";

let initialState = { user: [], loading: false };

export const fetchAPI = () => {
  return async (dispatch) => {
    dispatch(pendingUser());
    let res = await apiInstance.get("/user");
    dispatch(fetchUser(res.data));
  };
};

export const addUserAPI = (data) => {
  return async (dispatch) => {
    await apiInstance.post("/user", data);
    dispatch(fetchAPI());
  };
};

export const deleteUserAPI = (id) => {
  return async (dispatch) => {
    await apiInstance.delete(`/user/${id}`);
    dispatch(fetchAPI());
  };
};

export const updateUserAPI = (id, data) => {
  return async (dispatch) => {
    await apiInstance.put(`/user/${id}`, data);
    dispatch(fetchAPI());
  };
};

export function reduceruser(state = initialState, action) {
  switch (action.type) {
    case "Pending":
      return { ...state, loading: true };
    case "GetUser":
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
}

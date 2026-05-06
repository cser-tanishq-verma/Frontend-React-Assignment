export const addUser = (data) => ({ type: "AddUser", payload: data });
export const pendingUser = () => ({ type: "Pending" });
export const fetchUser = (data) => ({ type: "GetUser", payload: [...data] });
export const removeUser = { type: "RemoveUser" };

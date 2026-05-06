// First we need to create and export the context API reference
// ? we use the createContext method
// export let contextAPI = createContext();
// createContext will returns an object which has 3 main properties
// $$typeof - It is csjust for identification for context

// Consumer = > Consumer component consumes the value provided by Provider and accepts in the callback function'
//Provider = > Provider has the props called "value" in which we have to pass the data so Consumer can consume itimport React, { createContext, useState, useEffect } from "react";

import React, { createContext, useState, useEffect } from "react";
import {
  getProducts,
  postProduct,
  patchProduct,
  deleteProduct,
  getUsers,
  postUser,
  patchUser,
  deleteUser,
} from "../ApiServiceLayer/APIRequests";

export const contextAPI = createContext();

const ContextComponent = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchAll = async () => {
    setLoading(true);
    const [p, u] = await Promise.all([getProducts(), getUsers()]);
    setProducts(p);
    setUsers(u);
    setLoading(false);
  };

  const addProduct = async (data) => {
    const newItem = await postProduct(data);
    setProducts((prev) => [...prev, newItem]);
  };
  const updateProduct = async (id, data) => {
    const updated = await patchProduct(id, data);
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };
  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const addUser = async (data) => {
    const newUser = await postUser(data);
    setUsers((prev) => [...prev, newUser]);
  };
  const updateUser = async (id, data) => {
    const updated = await patchUser(id, data);
    setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
  };
  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <contextAPI.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        removeProduct,
        users,
        addUser,
        updateUser,
        removeUser,
        loading,
        count,
        setCount,
      }}
    >
      {children}
    </contextAPI.Provider>
  );
};

export default ContextComponent;

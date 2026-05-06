// npm i axios json-server
//? To Install the axios and the JSON-Server son the Local Project

// npx json-server pathOfTheFile --watch --port portNumber
//? To run the JSON server on the Given Port and Watch for the Changes
//  npx ./db.json --watch --port 3000

//! How to Create the EndPoints For the JSON Server
// ? {"EndPointName":[Array For the Objects]}import axios from "axios";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

// ─── PRODUCTS ───────────────────────────────────────
export const getProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

export const postProduct = async (data) => {
  const res = await axiosInstance.post("/products", data);
  return res.data;
};

export const patchProduct = async (id, data) => {
  const res = await axiosInstance.patch(`/products/${id}`, data);
  return res.data;
};

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
};

// ─── USERS ──────────────────────────────────────────
export const getUsers = async () => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

export const postUser = async (data) => {
  const res = await axiosInstance.post("/users", data);
  return res.data;
};

export const patchUser = async (id, data) => {
  const res = await axiosInstance.patch(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id) => {
  await axiosInstance.delete(`/users/${id}`);
};

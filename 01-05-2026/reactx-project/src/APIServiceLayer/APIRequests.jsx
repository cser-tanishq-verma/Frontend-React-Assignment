// npm i axios json-server
//? To Install the axios and the JSON-Server son the Local Project


// npx json-server pathOfTheFile --watch --port portNumber
//? To run the JSON server on the Given Port and Watch for the Changes
//  npx ./db.json --watch --port 3000

//! How to Create the EndPoints For the JSON Server 
// ? {"EndPointName":[Array For the Objects]}


import axios from "axios";
let axiosInstance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
})
export let postProduct=async()=>{
    let res = await axiosInstance.post("/products", 
        {name:"JAY",friend:"Veeru"})
        console.log(res);
        console.log(res.data);       }
export let pathProduct=async(id, data)=>{
    let res = await axiosInstance.patch(`/products/${id}`,data)
    console.log(res.data);   
}
export let getProducts=async()=>{
    let resa = await axiosInstance.get("/products")   
    return resa.data
}
export let deleteProduct=async(id)=>{
    let res = await axiosInstance.delete(`/products/${id}`)
    console.log(res);
}
export let getOneProduct=async(id)=>{
    let res=await axiosInstance.get(`/products/${id}`)
    return res.data
}
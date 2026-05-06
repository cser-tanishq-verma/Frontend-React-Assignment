import React, { useContext } from 'react'
import { contextAPI } from './ContextComponent'
import { getProducts, pathProduct, postProduct } from '../APIServiceLayer/APIRequests'
const ContextChild = () => {
// let {Consumer}=contextAPI
let data = useContext(contextAPI)
  return (    <div>{data.name}
  <h2>{data.state.count}</h2>
  <button onClick={()=>{
    data.updateState({count:data.state.count+1})
  }}>Increment</button>
  <button onClick={()=>{
    data.updateState({count:data.state.count-1})
  }}>Decrement</button>
  <button
  onClick={()=>{
    postProduct()
  }}
  >Post the Data</button>

  <button
  onClick={()=>{
    pathProduct("7bfFoRAO1vU", {city:"Ramgudh"})
  }}
  >Patch the ID</button>

  <button onClick={()=>{
    getProducts()
  }}>Get Products</button>
{/* <Consumer>{(value)=>{console.log(value)}}
</Consumer> */}</div>
  )
}
export default ContextChild
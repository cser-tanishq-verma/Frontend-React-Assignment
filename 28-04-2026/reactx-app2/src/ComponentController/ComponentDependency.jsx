import React, { useEffect, useState } from "react";

const ComponentWithDependency=()=>{
    let [count2 ,setCount2] = useState({value:0, name:"Robin"});
    
    useEffect(()=>{
            console.log("Hi there!!")
        },[count2.value]
    )
    
    return(     
        <div>
            <h1>This is count 2 : {count2.value}</h1>
            <button onClick ={()=>{setCount2(prev=>({...count2, name: "John"}))}}>Change name</button>
            <button onClick={()=>setCount2(prev=>({...count2, value: count2.value + 1}))}>Increment</button>
            <h1>This is count name : {count2.name}</h1>
        </div>
    )
    useEffect(()=>{
            console.log("Hi there!!")
        },[count2.name]
    )
}
export default ComponentWithDependency;
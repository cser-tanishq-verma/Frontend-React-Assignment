import React, { useEffect } from "react";
const ComponentConstructor=()=>{
    useEffect(()=>{
        console.log("this ois from component constructor")
    },[])
    return(
        <div style={{backgroundColor:"navy", color:"white"}}>
            <h1>This is component constructor</h1></div>
    )
}
export default ComponentConstructor;
import React, { useEffect } from "react";

const ComponentWithCleanUp=()=>{
    useEffect(()=>{
        return()=>{
            console.log("This is clean up function")
        }       
    },[])
    return(
        <div style={{backgroundColor:"navy", color:"white"}}>
            <h1>This is component with clean up function</h1></div>
    )
}   
export default ComponentWithCleanUp;
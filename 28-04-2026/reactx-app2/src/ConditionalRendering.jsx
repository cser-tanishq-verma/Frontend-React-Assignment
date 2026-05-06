import React, { useState } from "react";

const ConditionalRendering=()=>{
    let [flag,setFlag]=useState(true)
    return(
        <>
        <button onClick={()=>{
            setFlag(!flag)

        }}>Change the Flag</button>
       { flag  
        ?<div style={{height:"300px",backgroundColor:"red",width:"200px"}}></div> : <div style={{height:"300px",backgroundColor:"blue",width:"200px"}}></div>}
        {flag && <h1>this is true</h1>}
        </>
    )
}
export default ConditionalRendering
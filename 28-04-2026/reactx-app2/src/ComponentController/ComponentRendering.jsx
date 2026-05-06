import React, { useEffect } from "react";

const ComponentWithRender=()=>{
    useEffect(()=>{
        console.log("This is UseEffect");

    })
    console.log("This is Normal Statement");
    return(
        <div style={{backgroundColor:"navy", color:"white"}}>
            <h1>This is component with render</h1></div>
    )
}

export default ComponentWithRender;
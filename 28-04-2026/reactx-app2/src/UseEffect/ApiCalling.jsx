import React, { Fragment, useEffect, useState } from "react";

const ApiCalling=()=>{
    //! useeffect is a hook that we use to handle the sideeffects(asynchronus process)
    //? it will accept 2 parameters first one will be callback function and second one is dependency array
    // 1. useEffect(()=>,[]) similar 
    let [apiData,setApiData]=useState([])
    useEffect(
        ()=>{
            (async()=>{
                let res=await fetch("https://api.github.com/users")
                console.log(res)
                let data=await res.json()
                console.log(data)
                setApiData(data)
            })()
        },[]
    )
    return(
        <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
            {apiData.map(v=>(
            <Fragment key={v.id}><div><p><b>{v.id}.</b> {v.login}</p>
            <img src={`${v.avatar_url}`} height="200px" alt={`${v.login}`} />
            </div></Fragment>
        ))}
        </div>
    )
}
export default ApiCalling
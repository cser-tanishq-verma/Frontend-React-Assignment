import React, { useState } from "react";

const ControlledForm=()=>{
    let [student,setStudent]=useState({name:null,email:null})
    function updateThisState(e){
        setStudent(prev=>({[e.target.name]:e.target.value}))
    }
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                console.log(student)
            }}>
                <div>
                    <label htmlFor="a"></label>
                    <input type="text" name="username" onChange={(e)=>updateThisState(e)} id="username" />
                </div>
                <div>
                    <label htmlFor="a"></label>
                    <input type="password" password="password" onChange={(e)=>updateThisState(e)} id="password" />
                </div>
                <button>submit form here</button>
            </form>
            
        </>
    )
}
export default ControlledForm
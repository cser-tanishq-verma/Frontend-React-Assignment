import React, { useState } from "react"

const FormHw=()=>{
    let [student, setStudent]=useState({
        userName:null, 
        email:null, 
        password: null,
        gender:null,
        hobbies: []
    })
    function updateTheState(e){
        if(e.target.type=="checkbox"){
            if(e.target.checked){
                setStudent(prev=>({
                    ...prev,
                    hobbies: [...prev.hobbies, e.target.value]
                }))
            }
            else{
                setStudent(prev=>({
                    ...prev,
                    hobbies:[...prev.hobbies.filter(h=>h!==e.target.value)]
                }))
            }

        }
        else{
            setStudent(prev=>({
                ...prev,[e.target.name]:e.target.value
            }))
        }
    }

    return (
        <>
        <h1>this is the hw form</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(student)
        }}>

            <div>
                
                <h5>userName</h5>
                <input type="text" name="userName" onChange={(e)=>{
                    
                    updateTheState(e)
                }} id="userName" />
            </div>
            <br />
            <div>
                <h5>password</h5>
                <input type="password" name="password" onChange={(e)=>{
                    updateTheState(e);
                }} id="password" />
            </div>
            <br />
            <div>

                <h5>email</h5>
                <input type="email" name="email" onChange={(e)=>{
                    updateTheState(e);
                }} id="email" />
            </div>
            <br />
            <div>
               <h4>Gender: </h4>
               <input type="radio" name="gender" 
               value="female" 
               onChange={(e)=>{updateTheState(e)}} />Female

                  <input type="radio" name="gender" 
               value="others" 
               onChange={(e)=>{updateTheState(e)}} />Others

                  <input type="radio" name="gender" 
               value="male" 
               onChange={(e)=>{updateTheState(e)}} />Male
            </div>
            <br />
            <div>
                <h5>Hobbies</h5>
                <input type="checkbox" value= "coding" onChange={(e)=>{updateTheState(e)}} />Coding
                <input type="checkbox" value= "Hunting" onChange={(e)=>{updateTheState(e)}} />Hunting
                <input type="checkbox" value= "NoPassion" onChange={(e)=>{updateTheState(e)}} />No Passion
            </div>
            <br />

            <button>Submit</button>

        </form>
        </>
    )
}

export default FormHw
import { useState } from "react"
// function FunctionBased(){
//     // console.log(this)
//     // return <h1>this is function based</h1>

//     let a=20
//     return <>
//     {a}
//     <hr />
//     <button onClick={() => {
//         a += 20
//         console.log(a)
//     }}>Increment</button>
//     </>
// }

function FunctionBased(){
    let [state,setState]=useState(20)
    return<>
    {state}
    <hr />
    <button onClick={()=>{
        setState(state+20)
        console.log("==============");
        console.log(state);
        console.log("==============");

    }}>Increment</button>
    <h1>State</h1>
    </>
}

export default FunctionBased
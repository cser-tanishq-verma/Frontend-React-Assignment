import React from "react";

const Component3 =(props)=>{
    console.log("=====component3=====")
    let{num,setNum}=props.currentNum
    // console.log(props);
    return (
        // <div>Component3</div>
        <>
            <h2>this is component 3 count {num.count} </h2>
            <button onClick={()=>{
                setNum({count:num.count-1})
            }}>Decrement</button>
        </>
    )
}
export default Component3
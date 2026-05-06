import React from "react";
import Component3 from "./Component3"

const Component2=(props1)=>{
    console.log("=====component2=====")
    let {num,setNum}=props1
    // console.log(props1)
    return(
        <div>
            {/* <h2>Component2</h2>
            <Component3 info={props} /> */}

                <h2>This is component 2 count {num.count}</h2>
                <button onClick={()=>{
                    setNum(prev=>({...prev,count:num.count+1}))
                }}>Increment</button>

        </div>
        
    )
}
export default Component2
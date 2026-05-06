import { useEffect, useState } from "react";
import Component1 from "./Props/Component1"
import ApiCalling from "./UseEffect/ApiCalling";
import ComponentConstructor from "./ComponentController/ComponentConstructor";
import ComponentWithDependency from "./ComponentController/ComponentDependency";
import ComponentWithRender from "./ComponentController/ComponentRendering";
import ComponentWithCleanUp from "./ComponentController/ComponentCleanUp";

function App(){ 
    let [count,setCount]=useState(0)
    console.log("hi there")
    useEffect(()=>{
        console.log("this is from use state")
    })
    // return <Component1 />
    // return <ApiCalling/>
    return <div>
        {count}
        <button onClick={()=>{
      setCount(count+1)
    }}>increment</button>
     <ComponentConstructor />
      {/* <ComponentWithRender /> */}
      {/* <ComponentWithDependency /> */}
      {/* {
        !(count%5==0) && <ComponentWithCleanUp />

      } */}
    </div>
}
export default App;
import Component2 from "./Component2"
import React, { useState } from "react";
import Component3 from "./Component3";

function Component1(){
    let[num,setNum]=useState({count:0})
    return (<>
    {/* <h1>Component1</h1>
    <Component2 by ="Tanishq" class ={["abdul","modi","pajji"]}/> */}

        <h1>Component1</h1>
        <Component2 {...{num,setNum}}/>
        <Component3 currentNum={{num,setNum}}/>
        <hr />
    </>);
}
export default Component1;
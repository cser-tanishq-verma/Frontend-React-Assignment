import ClassBased from "./ClassBased"
import ClassBasedtwo from "./ClassBasedtwo"
import ConditionalRendering from "./ConditionalRendering"
import ControlledForm from "./ControlledForm"
import FunctionBased from "./FunctionBased"
import FunctionBased2 from "./FunctionBased2"
import FunctionBased3 from "./FunctionBased3"

function App(){ 
    return <div>
    {/* <ClassBased/>
    <ClassBasedtwo/> */}
    {/* class based(statefull) vs function based (state less) */}
    {/* hooks are predefined function that we use to make function based component as the stateful component */}
    {
        (()=>{
            return <h1> this is IIFE</h1>
        })()
    }
    <h3>this is h3 heading</h3>
    <FunctionBased />
    <FunctionBased3 />
    <FunctionBased2 />
    <ConditionalRendering/>
    <ControlledForm/>
    </div>
}
export default App

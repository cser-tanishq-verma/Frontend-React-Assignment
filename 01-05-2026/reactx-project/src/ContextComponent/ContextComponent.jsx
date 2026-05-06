import React, { createContext, useState } from 'react'
import ContextParent from './ContextParent';
// First we need to create and export the context API reference
// ? we use the createContext method
// export let contextAPI = createContext();
// createContext will returns an object which has 3 main properties
// $$typeof - It is csjust for identification for context 

// Consumer = > Consumer component consumes the value provided by Provider and accepts in the callback function'
//Provider = > Provider has the props called "value" in which we have to pass the data so Consumer can consume it

export let contextAPI= createContext() 
const ContextComponent = (props) => {
    let [ state, setState] = useState({count:0});
    // setCount(prev=>({...prev, count:state.count+1}))
    // console.log(props);
    function updateState(obj){
        setState(prev=>({...prev, ...obj}))
    }
    // console.log(contextAPI);
    let {Provider} = contextAPI;
  return (
    <div>
        <Provider value={{name:"JECRC", state,updateState}}>
        {props.children}
        </Provider>
       
    </div>
  )
}

export default ContextComponent
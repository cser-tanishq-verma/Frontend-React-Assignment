import { Component } from "react";

class ClassBased extends Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return <h2>this is heading from class based component</h2>
    }
}

export default ClassBased

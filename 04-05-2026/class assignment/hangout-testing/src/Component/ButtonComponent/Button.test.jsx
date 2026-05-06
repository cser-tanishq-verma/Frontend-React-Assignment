import React from "react"
import Button from "./Button";
import {render,screen} from "@testing-library/react"
test("render button with label", ()=>{
    render(<Button label={"Wakeup Call"}/>);
    const button = screen.getByText("Wakeup Call")
    expect(button).toBeInTheDocument()
})
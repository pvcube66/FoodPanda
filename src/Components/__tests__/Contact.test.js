//when testing a react component. we have to render the component on the
//dom
import React from "react";

import { render,screen } from "@testing-library/react";
import ContactUs from "../Contact";
import '@testing-library/jest-dom';

describe("these are contact us test cases:",()=>{
    test("this is going to test the contact file", () => {
        render(<ContactUs />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        
    }); 
    
    test("check for button",()=>{
        render(<ContactUs/>)
        // const buttonTest=screen.getByRole("button");
        const buttonTest=screen.getByText("Submit")
    
        expect(buttonTest).toBeInTheDocument();
    })
    
    test("check for input",()=>{
        render(<ContactUs/>);
        const result=screen.getByPlaceholderText("Vishy");
        // const result=screen.getByText
        expect(result).toBeInTheDocument();
    })
    
    test("should load 2 input boxes on the screen",()=>{
        render(<ContactUs/>);
        const result=screen.getAllByRole("textbox");
    
        expect(result.length).toBe(3);
    })
})

//this is unit testing





//basic testing of react
//1.render someting
//2.query something
//3.expect or assertion
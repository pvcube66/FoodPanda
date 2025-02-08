const { render,screen } = require("@testing-library/react")
import RestaurantCard from "../RestaurantCard"
import MockData from "../../Components/mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"
// import {withOpenLabel} from "../withOpenLabel"
import { withOpenLabel } from "../RestaurantCard"
import React from "react"
import resMock from "../../Components/mocks/resMock.json"
// it("should render restaurantCard data with props",()=>{
//     render(<RestaurantCard resData={MockData}/>)
//     const result=screen.getByText("TFC - Tasty Food Court")
//     expect(result).toBeInTheDocument();
// })

it("should check whether we're getting open or not", () => {
    const WrappedComponent = withOpenLabel(RestaurantCard);
    render(<WrappedComponent resData={MockData} />);
    console.log("open test is passed");
    const result = screen.getAllByText("Open");
    expect(result.length).toBeGreaterThan(0);
});

//if we not able to get anything via any means, we can use the getbytestid that means. in the component we want to get
// update its component and add data-testid:"some value" now give this value in the getbytestid. boom you got yo id

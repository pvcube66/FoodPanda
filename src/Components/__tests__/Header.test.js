import { Provider } from "react-redux"
import HeaderComponent from "../HeaderComponent"
import { fireEvent, render,screen } from "@testing-library/react"
import appStore from "../../../utils/appStore"
import { BrowserRouter} from "react-router-dom"
import '@testing-library/jest-dom';
// import { screen , render } from "@testing-library/react"

test("should load header component with login btn", () => {
    render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

const loginButton=screen.getByRole("button",{name:"Logout"});
// console.log(loginButton)
expect(loginButton).toBeInTheDocument();
}
)



it("should render header with cart item 0",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Provider store={appStore}>
        <HeaderComponent/>
    </Provider>
    </BrowserRouter>
);
    const result=screen.getByText("Cart(0)");
    expect(result).toBeInTheDocument()
})

it("should change login to logout on click",()=>{
    render(
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Provider store={appStore}>
        <HeaderComponent/>
    </Provider>
    </BrowserRouter>
);
    const result=screen.getByText("Logout");
    fireEvent.click(result);
    const result2=screen.getByText("Login");

    expect(result2).toBeInTheDocument()
})
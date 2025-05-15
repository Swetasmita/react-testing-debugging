import React from "react";
import ReactDOM from "react-dom/client"; // updated import
import App from "./App";
import { render } from "@testing-library/react";
import { act } from "react";

test("App snapshot test", () => {
  // Render the component
  const { asFragment } = render(<App />);  
  // Take a snapshot of the rendered component
  expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  
//use act() to simulate real-world interactions (clicks, renders, async updates).
  act(() => {
  const root = ReactDOM.createRoot(div); // use createRoot
  root.render(<App />);
  });
});

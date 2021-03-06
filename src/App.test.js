import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import RadioButtons from "./components/RadioButton";

afterEach(cleanup);
describe("dropdown testing", () => {
  it("renders dropdown", () => {
    render(<App />);
  });
  it("checks for heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/Select Nationality:/i);
  });
  it("checks for option", () => {
    render(<App />);
    const len = screen.getAllByRole("combobox").length;
    expect(len).toBe(17);
  });
  it("if its renders Radio Button successfully", () => {
    render(<RadioButtons />);
  });
});

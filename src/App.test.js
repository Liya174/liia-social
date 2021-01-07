import { render, screen } from "@testing-library/react";
import SamiraiJSApp from "./App";

test.skip("renders learn react link", () => {
    render(<SamiraiJSApp />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

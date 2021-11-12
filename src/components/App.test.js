import { render, screen } from "@testing-library/react";
import App from "src/components/App";

describe("App", () => {
  test("should render Learn React link", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: "Learn React" })).toBeDefined();
  });
});

import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Page 1/i)).toBeInTheDocument();
    expect(getByText(/Page 2/i)).toBeInTheDocument();
  });
});

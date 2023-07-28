import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../modules/home", () => (
  () => <div data-testid="App" />
));

describe('<App />', () => {
  test('Should render ok', () => {
    render(<App />)
    expect(screen.getByTestId("App")).toBeInTheDocument()
  });
});

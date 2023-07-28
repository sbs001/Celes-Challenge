import { render, screen } from "@testing-library/react";
import Home from "../../../modules/home";

jest.mock("../../../modules/home/pages/home-dashboard", () => (
  () => <div data-testid="home-dashboard" />
));

describe('<Home />', () => {
  test('Should render ok', () => {
    render(<Home />)
    expect(screen.getByTestId("home-dashboard")).toBeInTheDocument()
  });

  test('Should render images', () => {
    render(<Home />)
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });
});

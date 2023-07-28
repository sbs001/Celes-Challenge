import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeDashboardSearchBar from "../../../../../modules/home/components/home-dashboard-search-bar";

const mockSearchFn = jest.fn();
const value = "example";

describe('<HomeDashboardSearchBar />', () => {
  test('Should render ok', () => {
    render(<HomeDashboardSearchBar searchProducts={mockSearchFn} />);
    expect(screen.getByTestId("home-dashboard-search-bar")).toBeInTheDocument();
  });

  test('Should type and search value', () => {
    render(<HomeDashboardSearchBar searchProducts={mockSearchFn} />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, value)

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    expect(mockSearchFn).toHaveBeenCalled();
  });

  test('Should clear typeed value', () => {
    render(<HomeDashboardSearchBar searchProducts={mockSearchFn} />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, value)

    userEvent.click(screen.getByTestId("home-dashboard-search-bar-clear-icon"));

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});

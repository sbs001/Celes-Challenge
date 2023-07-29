import { render, screen } from "@testing-library/react";
import HomeDashboardTable from "../../../../../modules/home/components/home-dashboard-table";
import { mockProducts } from "../../../../../__mocks__/home-dashboard";
import userEvent from "@testing-library/user-event";

const props = {
  products: mockProducts,
  hasNoResults: false,
  isLoading: false,
}

describe('<HomeDashboardTable />', () => {
  test('Should render ok', () => {
    render(<HomeDashboardTable {...props} />);
    expect(screen.getByTestId("home-dashboard-table")).toBeInTheDocument();
  });

  test('Should show skeleton loader', () => {
    render(<HomeDashboardTable {...props} isLoading />);
    expect(screen.getByTestId("home-dashboard-table-skeleton")).toBeInTheDocument();
  });

  test('Should show no results message', () => {
    render(<HomeDashboardTable {...props} hasNoResults />);
    expect(screen.getByTestId("home-dashboard-no-results")).toBeInTheDocument();
  });

  test('Should open product modal detail', () => {
    render(<HomeDashboardTable {...props} hasNoResults />);
    userEvent.click(screen.getByText(mockProducts[0].title));
    expect(screen.getByTestId("modal-component")).toBeInTheDocument();
  });

  test('Should close product modal detail', () => {
    render(<HomeDashboardTable {...props} hasNoResults />);
    userEvent.click(screen.getByText(mockProducts[0].title));
    userEvent.keyboard("{Escape}");
    expect(screen.queryByTestId("modal-component")).not.toBeInTheDocument();
  });
});

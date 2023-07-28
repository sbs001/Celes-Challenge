import { render, screen } from "@testing-library/react";
import HomeDashboardTable from "../../../../../modules/home/components/home-dashboard-table";

const props = {
  products: [],
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
});

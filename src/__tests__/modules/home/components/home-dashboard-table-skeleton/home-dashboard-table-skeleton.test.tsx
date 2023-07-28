import { render, screen } from "@testing-library/react";
import HomeDashboardTableSkeleton from "../../../../../modules/home/components/home-dashboard-table-skeleton";

describe('<HomeDashboardTableSkeleton />', () => {
  test('Should render ok', () => {
    render(
      <table>
        <HomeDashboardTableSkeleton />
      </table>
    );
    expect(screen.getByTestId("home-dashboard-table-skeleton")).toBeInTheDocument();
  });
});

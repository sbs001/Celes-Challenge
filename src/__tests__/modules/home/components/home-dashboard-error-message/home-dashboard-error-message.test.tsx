import { render, screen } from "@testing-library/react";
import HomeDashboardErrorMessage from "../../../../../modules/home/components/home-dashboard-error-message";

describe('<HomeDashboardErrorMessage />', () => {
  test('Should render ok',  () => {
    render(<HomeDashboardErrorMessage />);
    expect(screen.getByTestId("home-dashboard-error-message")).toBeInTheDocument();
  });
});

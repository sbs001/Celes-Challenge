import { render, screen } from "@testing-library/react";
import HomeDashboard from "../../../../modules/home/pages/home-dashboard";

jest.mock("../../../../modules/home/components/home-dashboard-content-wrapper", () => (
  () => <div/>
));

describe('<HomeDashboard />', () => {
  test('Should render ok', () => {
    render(<HomeDashboard />)
    expect(screen.getByTestId("home-dashboard")).toBeInTheDocument()
  });
});

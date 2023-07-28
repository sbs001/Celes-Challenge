import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeDashboardContentWrapper from "../../../../../modules/home/components/home-dashboard-content-wrapper"
import { mockProducts } from "../../../../../__mocks__/home-dashboard";
import { sleep } from "../../../../../utils";

const mockFetchGetProductsFn = jest.fn()

jest.mock("../../../../../modules/home/services", () => ({
  ...jest.requireActual("../../../../../modules/home/services"),
  fetchGetProducts: () => mockFetchGetProductsFn(),
}))

describe('<HomeDashboardContentWrapper />', () => {
  test('Should render ok', async () => {
    mockFetchGetProductsFn.mockImplementation(() => Promise.resolve(mockProducts));
    render(<HomeDashboardContentWrapper />);
    await waitFor(() => sleep(1000), { timeout: 10000 });
    expect(screen.getByTestId("home-dashboard-content-wrapper")).toBeInTheDocument();
  });

  test('Should search value', async () => {
    mockFetchGetProductsFn.mockImplementation(() => Promise.resolve(mockProducts));
    render(<HomeDashboardContentWrapper />);
    await waitFor(() => sleep(1000), { timeout: 10000 });
    const input = screen.getByRole("textbox");
    userEvent.type(input, mockProducts[0].title)
    expect(screen.getByText(mockProducts[0].title)).toBeInTheDocument();
  });

  test('Should show error message', async () => {
    mockFetchGetProductsFn.mockImplementation(() => Promise.reject());
    render(<HomeDashboardContentWrapper />);
    await waitFor(() => sleep(1000), { timeout: 10000 });
    expect(screen.getByTestId("home-dashboard-error-message")).toBeInTheDocument();
  });
});

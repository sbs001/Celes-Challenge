import { render, screen } from "@testing-library/react";
import Modal from "../../../components/modal/modal";
import userEvent from "@testing-library/user-event";

const props = {
  children: <div>Content</div>,
  closeFunction: jest.fn(),
  className: "class"
}

describe('<Modal />', () => {
  test('Should render ok', () => {
    render(<Modal {...props} />);
    expect(screen.getByTestId("modal-component")).toBeInTheDocument();
  });

  test('Should close modal on click [X]', () => {
    render(<Modal {...props} />);
    userEvent.click(screen.getByTestId("modal-close-icon"));
    expect(props.closeFunction).toHaveBeenCalled();
  });

  test('Should close modal on outside click', () => {
    render(<Modal {...props} />);
    userEvent.click(screen.getByTestId("modal-bg-component"));
    expect(props.closeFunction).toHaveBeenCalled();
  });

  test('Should close modal on press [Escape]', () => {
    render(<Modal {...props} />);
    userEvent.keyboard("{Escape}")
    expect(props.closeFunction).toHaveBeenCalled();
  });

  test('Should render extern className', () => {
    render(<Modal {...props} />);
    expect(screen.getByTestId("modal-component")).toHaveClass(props.className);
  });
});

import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../rtk/index'; // Adjust the import path based on your store setup
import AuthButton from './AuthButton'; // Adjust the import path based on where your component is located
import { LogInOut } from '../../rtk/auth/authSlice'; // Adjust based on your file structure
import { useAppSelector, useAppDispatch } from '../../rtk/hooks';
import '@testing-library/jest-dom';
  

// Mock the dispatch and selector hooks
jest.mock("../../rtk/hooks", () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: jest.fn(),
}));

describe('AuthButton', () => {
  it('renders "Log In" button when user is not logged in', () => {
    // Mocking the selector to simulate user being not logged in
    (useAppSelector as jest.Mock).mockReturnValue({ isLoggedIn: false });

    render(
      <Provider store={store}>
        <AuthButton />
      </Provider>
    );

    const button = screen.getByText('Log In');
    expect(button).toBeInTheDocument();
  });

  it('renders "Log Out" button when user is logged in', () => {
    // Mocking the selector to simulate user being logged in
    (useAppSelector as jest.Mock).mockReturnValue({ isLoggedIn: true });

    render(
      <Provider store={store}>
        <AuthButton />
      </Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Log Out');
  });

  it('dispatches LogInOut action on button click', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    (useAppSelector as jest.Mock).mockReturnValue({ isLoggedIn: false });

    render(
      <Provider store={store}>
        <AuthButton />
      </Provider>
    );

    const button = screen.getByText('Log In');
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalledWith(LogInOut());
  });
});

import { render, screen} from '@testing-library/react';
import App from './App';
// import HomePage from './components/HomePage';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Adds one", () => {
    // render the App component
    render(<App />);

    const linkElement = screen.getByText(/🍋 Little Lemon/i);
    expect(linkElement).toBeInTheDocument();
});


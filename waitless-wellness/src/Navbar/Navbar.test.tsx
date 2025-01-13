import { render, screen } from '@testing-library/react'; 
import { Navbar } from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
    it('should display the Navbar', () => {
    render(<Navbar />);
    expect(screen.getByText('This is the Navbar')).toBeInTheDocument();
  });
});
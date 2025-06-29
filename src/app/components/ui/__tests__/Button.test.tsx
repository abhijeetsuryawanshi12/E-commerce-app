import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', async () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    
    await userEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(<Button variant="outline">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('border-input');

    rerender(<Button variant="ghost">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('hover:bg-accent');
  });
}); 
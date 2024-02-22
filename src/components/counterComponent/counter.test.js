import { render, screen } from '@testing-library/react';
import { Counter } from './counter';

test('test counter component', () => {
  render(<Counter initialValue='0' />);
  const counterValue = screen.getByTestId("counter-value");
  expect(counterValue).toHaveTextContent(0);
});

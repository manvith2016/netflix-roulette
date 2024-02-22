import { render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

test('test search form component', () => {
  render(<SearchForm initalString='test' />);
  const searchBox = screen.getByTestId("searchBox");
  expect(searchBox).toHaveValue('test');
});

import { render, screen } from '@testing-library/react';
import { GenreSelection } from './GenreSelection';

test('test genre selection component', () => {
  render(<GenreSelection genres={['All', 'Documentary']} selectedGenre='All' />);
  const genre = screen.getByTestId("genre-list");
  expect(genre).toBeDefined();
});

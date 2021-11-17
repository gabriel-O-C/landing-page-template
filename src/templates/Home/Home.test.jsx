import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';

test('expect to load theme', () => {
  const { debug } = renderTheme(<Home />);
  debug();
});

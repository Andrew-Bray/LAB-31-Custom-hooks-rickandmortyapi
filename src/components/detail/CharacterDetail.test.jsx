import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import ThemeProvider from '../../state/siteTheme';

describe('CharacterDetail component', () => {
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <CharacterDetail />
      </ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});

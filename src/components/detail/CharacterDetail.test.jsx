import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  it('renders CharacterDetail', () => {
    const { asFragment } = render(<CharacterDetail />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterPages from './CharacterPages';

describe('CharacterPages Container', () => {
  it('fetches and displays a list of characters', () => {
    render(<CharacterPages />);

    screen.getByAltText('Loading');
  });
});

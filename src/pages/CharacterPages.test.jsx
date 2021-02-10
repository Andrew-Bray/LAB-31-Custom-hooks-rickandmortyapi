import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CharacterPages from './CharacterPages';
import charactersResponse from '../fixtures/charactersResponse.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(charactersResponse));
  })
);
describe('CharacterPages Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <CharacterPages />)
      </MemoryRouter>);

    await screen.getByAltText('Loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});

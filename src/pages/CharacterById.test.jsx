import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import CharacterById from './CharacterById';
import character5Response from '../fixtures/character5Response.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/5', (req, res, ctx) => {
    return res(ctx.json(character5Response));
  })
);

describe('CharacterById Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a single detailed character', async() => {
    render(
      <MemoryRouter>
        <CharacterById match= {{ params: { id: 5 } }} />
      </MemoryRouter>);

    await screen.getByAltText('Loading');

    const oneCharacter = await screen.findByTestId('one-character');

    return waitFor(() => {
      expect(oneCharacter).not.toBeEmptyDOMElement();
    });
  });
});

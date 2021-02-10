import { useState, useEffect } from 'react';
import { findCharacters, findOneCharacter } from '../services/ImApiRick';

export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findCharacters(page)
      .then((characters) => {
        setCharacters(characters);
        setLoading(false);
      });
  }, [page]);

  return {
    loading,
    characters
  };
};

export const useOneCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findOneCharacter(id)
      .then((character) => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    character
  };
};

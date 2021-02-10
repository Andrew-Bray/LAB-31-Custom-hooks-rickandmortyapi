import React, { useState, useEffect } from 'react';
import Characters from '../components/characters/Characters';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/characters';


const CharacterPages = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;
  return <Characters characters={characters}/>;
};

export default CharacterPages;

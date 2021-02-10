import React, { useState } from 'react';
import Characters from '../components/characters/Characters';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/characters';


const CharacterPages = () => {
  const [count, setCount] = useState(1);
  const { loading, characters } = useCharacters(count);
  const decrement = () => setCount(currentCount => currentCount - 1);
  const increment = () => setCount(currentCount => currentCount + 1);

  if(loading) return <Loading />;
  return (
    <div>
      <button onClick={decrement}>&lt;</button>
      {count}
      <button onClick={increment}>&gt;</button>
      <Characters 
        characters={characters} 
        count={count} />
    </div>
  );
};

export default CharacterPages;

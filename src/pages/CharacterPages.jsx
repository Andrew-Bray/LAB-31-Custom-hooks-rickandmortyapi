import React, { useState, useEffect } from 'react';
import Loading from '../components/app/loading/Loading';


const CharacterPages = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  if(loading) return <Loading />;
  return (
    <div>
      <h1>Hello there!</h1>
    </div>
  );
};

export default CharacterPages;

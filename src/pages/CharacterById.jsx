import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import CharacterDetail from '../components/detail/CharacterDetail';
import { useOneCharacter } from '../hooks/characters';


const CharacterById = ({ match }) => {
  const { loading, character } = useOneCharacter(match.params.id);
  

  if(loading) return <Loading />;
  return (
    <CharacterDetail {...character} />
    
  );
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterById;

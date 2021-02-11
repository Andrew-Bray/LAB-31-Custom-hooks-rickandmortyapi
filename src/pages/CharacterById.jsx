import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/loading/Loading';
import CharacterDetail from '../components/detail/CharacterDetail';
import { useOneCharacter } from '../state/characters';
import styles from './characterbyid.css';
import { useTheme } from '../state/siteTheme';

const CharacterById = ({ match }) => {
  const { theme } = useTheme();
  const { loading, character } = useOneCharacter(match.params.id);
  

  if(loading) return <Loading />;
  return (
    <div className={styles[theme]}>
      <CharacterDetail {...character} />
    </div>
    
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

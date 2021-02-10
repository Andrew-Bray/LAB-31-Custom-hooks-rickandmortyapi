import React from 'react';
import PropTypes from  'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Character from './Character';
import styles from './characters.css';


const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={uuidv4()}>
      <Link to={`/character/${character.id}`}>
        <Character 
          image={character.image}
          name={character.name} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters" className={styles.Characters}>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;


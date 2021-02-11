import React from 'react';
import PropTypes from 'prop-types';
import styles from './characterdetail.css';
import { useTheme } from '../../state/siteTheme';


const CharacterDetail = ({ name, image, status, species, origin }) => {
  const { theme } = useTheme();
  return (
    <figure 
      data-testid="one-character"
      className={`${styles.CharacterDetail} ${styles[theme]}`}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className={styles.DetailBox}>
        <span>Species: {species}</span>
        <span>Status: {status}</span>
      </div>
      <h3>Origin: {origin}</h3>
    </figure>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};


export default CharacterDetail;

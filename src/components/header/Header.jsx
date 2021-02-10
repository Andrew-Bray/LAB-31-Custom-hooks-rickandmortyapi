import React from 'react';
import styles from  './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div>
        <h1>Hey! I'm API Riiiiiick!</h1>
      </div>
      <section>
        <Link to="/">Back to your list</Link>
      </section>
    </div>
  );
};

export default Header;

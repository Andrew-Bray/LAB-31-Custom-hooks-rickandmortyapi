/* eslint-disable max-len */
import React from 'react';
import styles from  './header.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../state/siteTheme';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = ({ target }) => {
    if(target.checked) {
      setTheme('Badass');
    } else setTheme('Puny');
  };

  // const themeStyle = theme === 'Puny' ? styles.Puny : styles.Badass;
  console.log(theme);
  // console.log(themeStyle);

  return (
    <div className={`${styles.Header} ${styles[theme]}`}>
      <div>
        <h1>Hey! I'm API Riiiiiick!</h1>
      </div>
      <section>
        <Link to="/">Back to your list</Link>
        <input type="checkbox" onChange={handleChange}></input>
      </section>
    </div>
  );
};

export default Header;

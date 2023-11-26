import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const headerMenu = ['Home', 'About us', 'Contact', 'Privacy Policy'];

const Header = () => {
  return (
    <header className={styles.header}>
      {headerMenu.map((item, index) => (
        <Link className={styles.item} to='/' key={index}>
          {item}
        </Link>
      ))}
    </header>
  );
};

export default Header;

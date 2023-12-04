import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const headerMenu = [
  { title: 'Home', link: '/' },
  { title: 'About us', link: '/about-us' },
  { title: 'Contact', link: '/contact' },
  { title: 'Privacy Policy', link: '/privacy-policy' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      {headerMenu.map((item, index) => (
        <Link className={styles.item} to={`${item.link}`} key={index}>
          {item.title}
        </Link>
      ))}
    </header>
  );
};

export default Header;

import React from 'react';
import Header from '../../components/header';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutUs}>
        <h1 className={styles.title}>Contact:</h1>
        <p className={styles.desc}>123 Creative Avenue</p>
        <p className={styles.desc}>Cityville, State 56789,</p>
        <p className={styles.desc}>United States</p>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36937.8896324525!2d-106.56670610132628!3d35.084755173631244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220aea01083ee1%3A0x4ecc431ad664972a!2z0JTQttC10YDRgNC4INCa0LvQsNC50L0g0J_QsNGA0LosINCQ0LvRjNCx0YPQutC10YDQutC1LCDQndGM0Y4t0JzQtdC60YHQuNC60L4gODcxMTAsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1701691806861!5m2!1sru!2sua'
          width='1284'
          height='450'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade' />
      </main>
    </>
  );
};

export default Contact;

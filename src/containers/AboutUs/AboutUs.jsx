import React from 'react';
import Header from '../../components/header';
import styles from './aboutUs.module.scss';

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutUs}>
        <h1 className={styles.title}>AboutUs</h1>
        <p className={styles.desc}>
          Welcome to our world of creativity and verbal artistry! We are a company
          dedicated to inspiring and enriching the online community through creative
          writing. Our mission is to provide a unique platform where everyone can express
          their ideas, opinions, and feelings through engaging and informative posts.
        </p>
        <p>
          We believe in the power of words and understand that quality content is the key
          to successful interaction in the online space. Our team of experts and writers
          strives to support and inspire our users by providing tools and resources for
          creative self-expression. Join us to create and share unique content, making the
          internet a brighter and more vibrant place!
        </p>
      </main>
    </>
  );
};

export default AboutUs;

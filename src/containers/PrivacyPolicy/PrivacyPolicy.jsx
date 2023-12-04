import React from 'react';
import Header from '../../components/header';
import styles from './privacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className={styles.aboutUs}>
        <h1 className={styles.title}>Privacy Policy:</h1>
        <ul>
          <li className={styles.desc}>
            At Blog LTD, we prioritize the privacy and security of our users. This Privacy
            Policy outlines how we collect, use, and safeguard your personal information.
            By using our platform, you consent to the practices described herein.
          </li>
          <li className={styles.desc}>
            We may collect personal information such as name, email address, and
            user-generated content when you interact with our platform. This information
            is used solely for the purpose of enhancing your user experience.
          </li>
          <li className={styles.desc}>
            Your personal information is utilized to personalize content, improve our
            services, and communicate relevant updates. We do not share or sell your
            information to third parties without your explicit consent.
          </li>
          <li className={styles.desc}>
            We employ industry-standard security measures to protect your data from
            unauthorized access, disclosure, or alteration. Your privacy and the
            confidentiality of your information are paramount to us.
          </li>
          <li className={styles.desc}>
            Our platform may use cookies to enhance user experience. You have the option
            to modify your browser settings to decline cookies, although this may affect
            certain functionalities.
          </li>
          <li className={styles.desc}>
            We reserve the right to update this Privacy Policy as necessary. Users will be
            notified of any significant changes, and continued use of our platform implies
            acceptance of these changes.
          </li>
        </ul>
      </main>
    </>
  );
};

export default PrivacyPolicy;

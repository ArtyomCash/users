import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import { useLocation } from 'react-router-dom';
import styles from './userPosts.module.scss';

const UserPosts = () => {
  // const { id } = useParams();
  const location = useLocation();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const url = location.pathname.split('/');

    console.log('url', url);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${url[2]}`)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));
  });

  return (
    <>
      <Header />
      <main className={styles.userPosts}>
        <ul>
          {userPosts.map((post) => (
            <li className={styles.li} key={post.id}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.desc}>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default UserPosts;

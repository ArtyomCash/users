import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import styles from './userPosts.module.scss';

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));

  }, [id]);

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

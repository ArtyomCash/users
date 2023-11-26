import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from '../../components/header';
import styles from './userPosts.module.scss';

const UserPosts = () => {
  const { id } = useParams();
  const location = useLocation();
  const { username } = location.state;

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));
  }, [id]);

  return (
    <>
      <Header />
      <main className={styles.userPosts}>
        <h2>Posts by User {username}</h2>
        <ul>
          {userPosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default UserPosts;

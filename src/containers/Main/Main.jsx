// Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserPosts from '../../containers/UserPosts';
import styles from './main.module.scss';

const Main = () => {
  const [postList, setPostList] = React.useState(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  const uniqueUsers =
    postList && Array.from(new Set(postList.map((post) => post.userId)));

  return (
    <main className={styles.main}>
      <h1>Users list</h1>
      {uniqueUsers &&
        uniqueUsers.map((userId, index) => (
          <Link to={`/user-posts/${userId}`} key={index}>User name {userId}</Link>
        ))}
    </main>
  );
};

export default Main;

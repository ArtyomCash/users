import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.scss';

const Main = () => {
  const [postList, setPostList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  const filteredUsers = postList
    ? postList.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <main className={styles.main}>
      <h1>Users list</h1>
      <div>
        <input
          type='text'
          placeholder='Search by username'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <section className={styles.wrapper}>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <Link to={`/user-posts/${user.id}`} key={user.id}>
              User name {user.username}
            </Link>
          ))}
      </section>
    </main>
  );
};

export default Main;

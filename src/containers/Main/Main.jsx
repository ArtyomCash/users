import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import styles from './main.module.scss';

const Main = () => {
  const [postList, setPostList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, []);

  const handleSort = () => {
    const sortedUsers = [...postList];

    sortedUsers.sort((a, b) => {
      const nameA = a.username.toLowerCase();
      const nameB = b.username.toLowerCase();

      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    setPostList(sortedUsers);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredUsers = postList
    ? postList.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Users list</h1>
        <article className={styles.searchBox}>
          <input
            className={styles.input}
            type='text'
            placeholder='Search by username'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={() => handleSort()} type='button'>
            Sort by username
          </button>
        </article>
        <section className={styles.wrapper}>
          {filteredUsers &&
            filteredUsers.map((user) => (
              <Link
                className={styles.link}
                to={`/user-posts/${user.id}`}
                state={{ username: user.username }}
                key={user.id}>
                {user.username}
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};

export default Main;

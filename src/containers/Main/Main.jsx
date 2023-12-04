import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import styles from './main.module.scss';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const [postList, setPostList] = useState(null);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'asc');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_sort=username&_order=${sortOrder}`)
      .then((response) => response.json())
      .then((json) => setPostList(json));
  }, [sortOrder]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('search', searchTerm);
    params.set('sort', sortOrder);
    navigate(`${location.pathname}?${params.toString()}`);
  }, [searchTerm, sortOrder, location.pathname, navigate]);

  const handleSort = () => {
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

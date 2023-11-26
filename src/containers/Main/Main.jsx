import React from 'react';
import { Link } from 'react-router-dom';
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
      <section className={styles.wrapper}>
        {uniqueUsers &&
          uniqueUsers.map((userId, index) => (
            <Link to={`/user-posts/${userId}`} key={index}>
              User name {userId}
            </Link>
          ))}
      </section>
    </main>
  );
};

export default Main;

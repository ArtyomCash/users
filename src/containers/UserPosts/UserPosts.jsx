import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));
  }, [id]);

  return (
    <div>
      <h2>Posts by User {}</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;

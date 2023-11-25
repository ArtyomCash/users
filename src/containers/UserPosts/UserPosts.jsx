// UserPosts.js
import React, { useEffect, useState } from 'react';

const UserPosts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((json) => setUserPosts(json));
  }, [userId]);

  return (
    <div>
      <h2>Posts by User {userId}</h2>
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

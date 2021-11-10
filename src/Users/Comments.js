
import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function Comments (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const requestUser = async (postId) => {
      const response = await axios.get(`/posts/${postId}/comments`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);
  
  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

  return (
    <div>
      <h1>Comments</h1>
      <ul>
      {user.map((user) => (
            <li key={user.postId}>
              <div>
              postId:{user.postId}
              </div>
              <div>
              id:{user.id}
              </div>
              <div>
              name:{user.name}
              </div>
              <div>
              email{user.email}
              </div>
              <div>
              body{user.body}
              </div>
              </li>
      ))}

      </ul>
      
    </div>
  );
}
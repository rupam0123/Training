
import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function Posts (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/posts/${userId}`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);
  
  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

  return (
    <div>
      
      <ul>
        <li>{user.userId}</li>
        <li>title:{user.title}</li>
        <li>body:{user.body}</li>
      </ul>
      
    </div>
  );
}
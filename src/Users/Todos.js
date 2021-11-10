
import React, { useState, useEffect } from 'react';
import axios from './axios';

export default function User (props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}/todos`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);
  
  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";

  return (
    <div>
      <h1>Todos</h1>
      <ul>
      {user.map((user) => (
            <li key={user.userId}>
              <div>
              userId:{user.userId}
              </div>
              <div>
              id:{user.id}
              </div>
              <div>
              title:{user.title}
              </div>
              <div>
              Complete{user.completed}
              </div>
              </li>
      ))}

      </ul>
      
    </div>
  );
}
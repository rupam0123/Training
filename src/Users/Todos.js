
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from './axios';
import {setUser} from '../actions'  
 export default function User (props) {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}/todos`);
      const setUserAction = setUser(response.data);
      dispatch(setUserAction)
      console.log(setUserAction);
    };
    if (!users.selectedUserId) return;
    requestUser(users.selectedUserId);

  }, [users.selectedUserId,dispatch]);
  
  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !users) return "Loading";

  return (
    <div>
      <h1>Todos</h1>
      <ul>
      {users.map((user) => (
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

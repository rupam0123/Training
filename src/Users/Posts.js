
import Button from '@restart/ui/esm/Button';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import Comments from './Comments';

export default function Posts (props) {
  const [user, setUser] = useState(null);
  const [comments,setComments] = useState(true);
  const [selectedUserId,setSelectedUserId] =useState(null);


  useEffect(() => {
    const requestUser = async (userId) => {
      const response = await axios.get(`/users/${userId}/posts`);
      setUser(response.data);
    };
    if (!props.selectedUserId) return;
    requestUser(props.selectedUserId);

  }, [props.selectedUserId]);
  
  const onClickUser = (userId) => {
    setSelectedUserId( {selectedUserId : userId });
  }
  
  if (!props.selectedUserId) return "No Data Display";
  if (props.selectedUserId && !user) return "Loading";
  if(!comments){
      return <Comments selectedUserId={props.selectedUserId}/>
  }
 
  return (
    <div>
      <h1>Post</h1>
      <ul>
      {user.map((user) => (
            <li key={user.userId} onClick={() =>{onClickUser(user.userId)} }>
              <div>
              userId:{"  "}{user.userId}
              </div>
              <div>
              id:{"  "}{user.id}
              </div>
              <div>
              title:{"  "}{user.title}
              </div>
              <div>
              body:{"  "}{user.body}
              </div>
              <div>
              <Button type=""  onClick={() => setComments(false) }>Comments</Button>
              </div>
              </li>
      ))}
      </ul>
      
      
    </div>
  );
}
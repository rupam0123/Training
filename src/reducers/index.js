import { combineReducers } from 'redux';
import users from './users';
import todoReducer from './todos'
import postsReducer from './posts';
import commentReducer from './comments';


export default combineReducers({
  commentReducer,
  postsReducer,
  todoReducer,
  users,
});
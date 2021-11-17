import { combineReducers } from 'redux';
import users from './users';
import todoReducer from './todos'
import postsReducer from './posts';
import commentReducer from './comments';
import newUserReducer from './newUser';


export default combineReducers({
  commentReducer,
  newUserReducer,
  postsReducer,
  todoReducer,
  users,
});
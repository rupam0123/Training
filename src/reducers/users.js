import {
    TODO,
    SET_SELECTED_USER_ID,
    SET_USERS,
    SET_USER,
  } from '../actions';
  
  const initialState = {
    Todo: [],
    selectedUserId: null,
    records: [],
    user: {},
  }
  
  export default function users (state = initialState, action) {
    switch (action.type) {
      case TODO:
        return {
          ...state,
          TODO: action.payload,
        }; 
      case SET_SELECTED_USER_ID:
        return {
          ...state,
          selectedUserId: action.payload,
        };
      case SET_USERS:
        return {
          ...state,
          records: action.payload,
        };
      case SET_USER:
        return {
          ...state,
          user: action.payload,
        };
      default:
        return state;
    }
  }
  
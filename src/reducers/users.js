import {
    SET_SELECTED_USER_ID,
    SET_USERS,
    SET_USER,
    SET_SHOW,
    SET_NEWSHOW,
  } from '../actions';

  const initialState = {
    Todo: [],
    selectedUserId: null,
    records: [],
    user: {},
    show: false,
    newShow:false,
  }
  
  export default function users (state = initialState, action) {
    switch (action.type) {
      case SET_NEWSHOW :
        return{
          ...state,
          newShow: action.payload
        }
      case SET_SHOW :
        return{
          ...state,
          show: action.payload,
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
  
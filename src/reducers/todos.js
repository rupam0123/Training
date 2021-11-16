import {
    SET_TODO 
} from "../actions";

const initialState = {
    todos: [],
  }

  export default function todoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TODO:
            return{
                ...state,
                todos:action.payload
            };
        default:
            return state
        }
  }    
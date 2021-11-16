import { SET_COMMENTS } from "../actions";

const initialState = {
    comments: [],
  }

  export default function commentReducer (state = initialState, action) {
    switch (action.type) {
        case SET_COMMENTS:
            return{
                ...state,
                comments:action.payload
            };
        default:
            return state
        }
  }    
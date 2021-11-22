import { SET_ADD } from "../actions";

const initialState = {
   data : { name: '',
    phone: '',
    email: '',
    userName:'',
    }

  }

  export default function newUserReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ADD:
            return{
                ...state,
                data:action.payload
            };
        default:
            return state
        }
  }    
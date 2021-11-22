import axios from 'axios';
import {  setAdd} from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});

export const requestNewUsers = (addUser) => async (dispatch) => {
    try {
      const response = await client.post("http://localhost:3008/users",addUser);
      dispatch(setAdd(response.data));
    } catch (err) {
      console.log(err);
    }
  }
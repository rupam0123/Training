import axios from 'axios';
import { setTodo } from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});


export const requestTodo =() =>async (dispatch) => {
    try{
    const { userid } = this.props.match.params
    const response = await client.get(`/users/${userid}/todos`);
    console.log(response.data)
    dispatch(setTodo(response.data));
    } catch (err) {
        console.log(err)
    }
 }

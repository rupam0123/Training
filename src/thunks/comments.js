import axios from 'axios';
import { setComments } from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});

export const requestComments =(postid) =>async (dispatch) => {
    try{
    
    const response = await client.get(`/posts/${postid}/comments`);
    console.log(response.data)
    dispatch(setComments(response.data));
    } catch (err) {
        console.log(err)
    }
 }
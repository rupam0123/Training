import axios from 'axios';
import {  setPosts } from '../actions';

const client = axios.create({
  baseURL: 'http://localhost:3008',
});

export const requestPost =() =>async (dispatch) => {
    try{
    const { userid } = this.props.match.params
    const response = await client.get(`/users/${userid}/posts`);
    console.log(response.data)
    dispatch(setPosts(response.data));
    } catch (err) {
        console.log(err)
    }
 }
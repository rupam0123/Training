export const SET_COMMENTS = 'SET_COMMENTS'
export const SET_POSTS = 'SET_POSTS'
export const SET_TODO = 'SET_TODO'
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'


export const setComments = (payload) => ({type:SET_COMMENTS, payload})
export const setPosts = (payload) =>({type: SET_POSTS, payload})
export const setTodo = (payload) => ({type: SET_TODO, payload})
export const setSelectedUserId = (payload) => ({ type: SET_SELECTED_USER_ID, payload });
export const setUser = (payload) => ({type: SET_USER, payload});
export const setUsers = (payload) => ({type: SET_USERS, payload});
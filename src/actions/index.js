export const SET_NEWSHOW = 'SET_NEWSHOW'
export const SET_ADD = 'SET_ADD'
export const SET_COMMENTS = 'SET_COMMENTS'
export const SET_POSTS = 'SET_POSTS'
export const SET_TODO = 'SET_TODO'
export const SET_SELECTED_USER_ID = 'SET_SELECTED_USER_ID';
export const SET_SHOW = 'SET_SHOW'
export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'


export const setNewShow = (payload) => ({type:SET_NEWSHOW, payload})
export const setAdd = (payload) => ({type: SET_ADD,payload})
export const setComments = (payload) => ({type:SET_COMMENTS, payload})
export const setPosts = (payload) =>({type: SET_POSTS, payload})
export const setTodo = (payload) => ({type: SET_TODO, payload})
export const setSelectedUserId = (payload) => ({ type: SET_SELECTED_USER_ID, payload });
export const setShow = (payload) => ({type:SET_SHOW, payload})
export const setUser = (payload) => ({type: SET_USER, payload});
export const setUsers = (payload) => ({type: SET_USERS, payload});


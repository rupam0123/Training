
import React from 'react';
import axios from './axios';
import { setPosts } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';



 class Posts extends React.Component {
requestUser = async () => {
    const {userid}= this.props.match.params
    const response= await axios.get(`/users/${userid}/posts`);
    console.log(response.data)
    this.props.setPosts(response.data);

    
  }
  
  componentDidMount() {
 
    this.requestUser();

  }


  render() {
    const { posts } = this.props
    if (!posts) return "Loading";
    

    return (

      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((user) => (
            <li key={user.userId}>
              <div>
                userId:{user.userId}
              </div>
              <div>
                id:{user.id}
              </div>
              <div>
                title:{user.title}
              </div>
              <div>
                Body :{user.body}
              </div>
              <div>
              <Link to={`/${user.id}/comments`}>   <Button type ="button">Comments</Button></Link>&nbsp;&nbsp;
              </div>
            </li>
          ))}

        </ul>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  setPosts,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);



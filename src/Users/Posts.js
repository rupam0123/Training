
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import {requestPost} from '../thunks/posts'



 class Posts extends React.Component {
  
  componentDidMount() {
 
    this.props.requestPost();

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
  requestPost,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);



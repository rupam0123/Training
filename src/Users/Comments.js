
import React from 'react';
import axios from './axios';
import { setComments} from '../actions';
import { connect } from 'react-redux';

class Todos extends React.Component {
  requestUser = async () => {
    const { postid } = this.props.match.params
    const response = await axios.get(`/posts/${postid}/comments`);
    console.log(response.data)
    this.props.setComments(response.data);


  }

  componentDidMount() {

    this.requestUser();

  }


  render() {
    const { comments } = this.props
    if (!comments) return "Loading";


    return (

      <div>
        <h1>Comments</h1>
        <ul>
          {comments.map((user) => (
            <li key={user.userId}>
              <div>
                postId:{user.postId}
              </div>
              <div>
                id:{user.id}
              </div>
              <div>
                Name:{user.name}
              </div>
              <div>
                Email{user.email}
              </div>
              <div>
                Body :{user.body}
              </div>
            </li>
          ))}

        </ul>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  comments: state.commentReducer.comments,
});

const mapDispatchToProps = {
  setComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);



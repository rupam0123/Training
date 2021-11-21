
import React from 'react';
import { connect } from 'react-redux';
import {requestComments} from '../thunks/comments'


class Todos extends React.Component {


  componentDidMount() {

    this.requestComments();

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
  requestComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);



import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Add a comment</h3>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Save comment</button>
          </div>
        </form>
        <button
          className="fetch-comments-btn"
          onClick={this.props.fetchComments}
        >
          Fetch comments
        </button>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));

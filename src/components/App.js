import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }

  renderButton() {
    return this.props.auth ? (
      <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
    ) : (
      <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/post">POST A COMMENT</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  actions
)(App);

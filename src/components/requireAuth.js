import React, { Component } from 'react';
import { connect } from 'react-redux';

// HOC
export default ChildComponent => {
  class ComposedComponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.chechAuth();
    }

    // component just got updated (received new props)
    componentDidUpdate() {
      this.chechAuth();
    }

    chechAuth() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth,
  });

  return connect(mapStateToProps)(ComposedComponent);
};

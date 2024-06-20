import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  render() {
    return (
      <div className='recent-posts'>
        <div className='recent-posts__wrapper'>
          <div className='recent-post__heading'>Recent post</div>
            <ul className='recent-post__posts'>
            <li>Recent post 0</li>
            <li>Recent post 1</li>
            <li>Recent post 2</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default connect(null, actions) (RecentPosts);

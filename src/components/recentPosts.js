import React, { Component } from 'react';

class RecentPosts extends Component {
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

export default RecentPosts;

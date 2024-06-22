import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }
  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => {
        if(index < 3) {
            return (
                <li key={index}>
                   {/* {post.title} */}
                   {post.name}
                   </li>
            )   
        }
    })
    return posts
}
  render() {
    return (
      <div className='recent-posts'>
        <div className='recent-posts__wrapper'>
          <div className='recent-post__heading'>Recent post</div>
            <ul className='recent-post__posts'>
              {this.renderPosts()}
            </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPosts);

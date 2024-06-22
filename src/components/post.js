import React, { Component } from 'react';

class Post extends Component {
  renderTopics() {
    // let topics = this.props.associated_topics.map((topic, index) => {
    //   return <span className="post-topic" key={index}>{topic}</span>
      let topics = this.props.films.map((films, index) => {
        return <span className="post-topic" key={index}>{films}</span>
  })
    return topics;
  }
  render() {
    return (
      <li className="recent-post">
        <div className="recent-post__title">
          {/* {this.props.title} */}
          {this.props.name}
        </div>
        <div className="recent-post__topics">
            {this.renderTopics()}
        </div>
      </li>
    )
  }
}

export default Post;

import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
        height: 0
    };
}

  renderTopics() {
    // let topics = this.props.associated_topics.map((topic, index) => {
    //   return <span className="post-topic" key={index}>{topic}</span>
      let topics = this.props.films.map((film, index) => {
        return <span className="post-topic" key={index}>{film}</span>
  })
    return topics;
  }

  getNameForPostLink(str) {
    var n = str.lastIndexOf('/');
    var link = str.substring(n + 1, str.length);

    if((n+1) == str.length) {
        link = str.slice(0, n);
        n = link.lastIndexOf('/');
        link = str.substring(n + 1, str.length - 1);
    }    

    if(link.includes('.html')) {
        link = link.substring(0, link.length - 5);
    }
    if(link.includes('.htm')) {
        link = link.substring(0, link.length - 4);
    }

    return link;
}

  renderLinks() {
//    let links = this.props.post_links.map((post_link, index) => {
    let links = this.props.residents.map((residents, index) => {
      return (
      // <div className="post-link" key={index}>
      //     <div className="post-link__box"></div>
      //     <div className="post-link__link">
      //         <a href={post_link.link_url}>Useful Link #{index + 1}</a>
      //     </div>
      // </div>
        <div className="post-link" key={index}>
          <div className="post-link__box"></div>
            <div className="post-link__link">
              {/* <a href={post_link.link_url}>{this.getNameForPostLink(post_link.link_url)}</a> */}
              {/* <a href={residents.link_url}>Useful Link #{index + 1}</a> */}
              <a href={residents.link_url}>{this.getNameForPostLink(residents)}</a>
            </div>
        </div>
      )
    })
    if(links == 0) {
      return <div className="no-content">No Post Links</div>
    }
    return links;
  }

  render() {
    if(this.props.type == 'recent') {
      return (
        <li className="recent-post">
          <div className="recent-post__title">
            {/* {this.props.title} */}
            <a href={this.props.url_for_post}>{this.props.name}</a>
            {/* {this.props.name} */}
          </div>
          <div className="recent-post__topics">
              {this.renderTopics()}
          </div>
        </li>
      )
    } else if(this.props.type == 'result') {
        return (
          <li className="result-post"
            onMouseEnter={() => this.setState({ height: 170 })}
            onMouseLeave={() => this.setState({ height: 0 })}
          >
            <div className="result-post__topics">
              {this.renderTopics()}
            </div>
            <div className="result-post__title">
              <a href={this.props.url}>
                {/* {this.props.name}</a> */}
                {this.props.name}
              </a>
            </div>
            <AnimateHeight
              duration={500}
              height={this.state.height}
            >
              <div className="result-post__links">
                {this.renderLinks()}
              </div>
            </AnimateHeight>
          </li>
        )
    }
    
  }

    // return (
    //   <li className="recent-post">
    //     <div className="recent-post__title">
    //       {/* {this.props.title} */}
    //       {this.props.name}
    //     </div>
    //     <div className="recent-post__topics">
    //         {this.renderTopics()}
    //     </div>
    //   </li>
    // )
}

export default Post;

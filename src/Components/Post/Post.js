import React, { Component } from "react";
import { getPosts } from "../../ducks/reducer";

class Post extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    return <div>Post</div>;
  }
}

export default Post;

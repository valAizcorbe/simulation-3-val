import React, { Component } from "react";
import Post from "../Post/Post";
import { connect } from "react-redux";
import { getPosts } from "../../ducks/reducer";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userPosts: true
    };
  }

  componentDidMount = props => {
    this.props.getPosts();
  };

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <input
          name="search"
          value={this.state.search}
          placeholder="Search by Title"
          onChange={e => this.handleInputs(e)}
        />
        <button>Search</button>
        <button>Reset</button>
        <label>
          My Posts
          <input type="checkbox" name="userPosts" value="userPosts" />
          {this.state.posts.map((element, index) => {
            return <Post post={element} key={index} />;
          })}
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.reducer
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Dashboard);

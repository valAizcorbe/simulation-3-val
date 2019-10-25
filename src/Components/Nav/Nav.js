import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render(props) {
    return (
      <div>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { username, profile_pic } = reduxState;
  return {
    username: username,
    profile_pic: profile_pic
  };
};

export default connect(mapStateToProps)(Nav);

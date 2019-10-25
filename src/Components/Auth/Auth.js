import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    axios
      .post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  handleRegister = () => {
    axios
      .post("/auth/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          name="username"
          value={username}
          onChange={e => this.handleInputs(e)}
        />
        <input
          name="password"
          value={password}
          type="password"
          onChange={e => this.handleInputs(e)}
        />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default Auth;

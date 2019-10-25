import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleInputs = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { title, img, content } = this.state;
    return (
      <div>
        <h1>New Post</h1>
        <input
          name="title"
          value={title}
          onChange={e => this.handleInputs(e)}
        />
        <br />
        <input name="img" value={img} onChange={e => this.handleInputs(e)} />
        <br />
        <input
          name="content"
          value={content}
          onChange={e => this.handleInputs(e)}
        />

        <button>Post</button>
      </div>
    );
  }
}

export default Form;

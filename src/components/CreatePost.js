import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super (props);

    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      author: '',
      title: '',
      post: '',
    }
  }

  handleAuthor(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  };

  handlePost(event) {
    this.setState({
      post: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      author: this.state.author,
      title: this.state.title,
      post: this.state.post,
    })

    let listItem = JSON.stringify(this.state);
    console.log(listItem);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });

    this.setState({
      author: '',
      title: '',
      post: '',
    })
  }
  render() {
    return (
      <div>
      <h1>Create a Blog Post</h1>
      <form>
      <input value={this.state.author} onChange={this.handleAuthor} name="author" type="text" placeholder="Author"/>
      <input value={this.state.title} onChange={this.handleTitle} name="title" type="text" placeholder="Title"/>
      <input value={this.state.post} onChange={this.handlePost} name="post" type="textarea" placeholder="Post"/>
      <button type="submit">+</button>
      </form>
      </div>
    );
  }
}

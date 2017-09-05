import React, { Component } from 'react';

export default class CreatePost extends Component {
  constructor(props) {
    super (props);

    this.state = {
      author: '',
      title: '',
      post: '',
    }

    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePost = this.handlePost.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  handlePost(e) {
    this.setState({
      post: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      author: e.target.value,
      title: e.target.value,
      post: e.target.value,
    });

    let listItem = JSON.stringify(this.state);
    console.log(listItem);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger", {
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

  componentDidMount() {
       fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
       .then(results => {
       return results.json();
       })
       .then(data => {
         this.setState({blogs: data});
         console.log("state", this.state.blogs);
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
      <button onClick={this.handleSubmit} type="submit">+</button>
      </form>
      </div>
    );
  }
}

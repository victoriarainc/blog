import React, { Component } from 'react';

export default class CreatePost extends Component {
  render() {
    return (
      <div>
      <h1>Create a Blog Post</h1>
      <form>
      <input type="text" placeholder="Author"/>
      <input type="text" placeholder="Title"/>
      <input type="textarea" placeholder="Post"/>
      <button>+</button>
      </form>
      </div>
    );
  }
}

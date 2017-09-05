import React, { Component } from 'react';

export default class CreatePost extends Component {
  render() {
    return (
      <div>
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

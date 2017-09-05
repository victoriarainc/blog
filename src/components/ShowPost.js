import React, { Component } from 'react';

export default class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      title: '',
      post: '',
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL)
    .then(response => response.json())
    .then(data =>
      this.setState({author: data.author, title: data.title, post: data.post}))
  }

  render() {
        return (
          <div className="post">
            <h1>{this.state.title}</h1>
            <h3>by {this.state.author}</h3>
            <p>{this.state.post}</p>
          </div>
        )
      }
}

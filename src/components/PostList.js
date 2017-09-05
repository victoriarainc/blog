import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(results => {
    return results.json();
  }).then(data => {
    this.setState({blogs: data});
    console.log("state", this.state.blogs)
  })
}

  render() {
    let items = this.state.blogs.map((post) => {
      if (post.author) {
       return(
         <Link to={`/ShowPost/${post._id}`} key={post._id}>
         <div className="post">
           <p>Author: {post.author}</p>
           <p>Title: {post.title}</p>
         </div>
         </Link>
       );
     }
   });
    return (
      <div className="App">
      <h1>Today's News</h1>
      {items}
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class App extends Component {
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

fetchData = (e) => {
  e.preventDefault();
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger').then(results => {
    return results.json();
  }).then(data => {
    this.setState({blogs: data});
  })
}

  render() {
    let items = this.state.blogs.map((post) => {
       return(
         <div className="post">
           <p> Author: {items.author} </p>
           <p> Title: {items.title}</p>
         </div>
       );
   });
    return (
      <div className="App">
      <h1> Today's News </h1>
      {items}
      </div>
    );
  }
}

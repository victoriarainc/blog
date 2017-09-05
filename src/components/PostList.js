import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
    return results.json();
  }).then(data => {
    this.setState({blogs: data});
  })
}

fetchData = (e) => {
  e.preventDefault();
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
    return results.json();
  }).then(data => {
    this.setState({blogs: data});
  })
}

  render() {
    let items = this.state.blogs.map((post) => {
     if (post) {
       return(
         <p>This is a blog post.</p>
       );
     }
   });
    return (
      <div className="App">
      <h1> Today's News </h1>
      {items}
      </div>
    );
  }
}

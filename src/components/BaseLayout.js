import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
      <header>
          <div className="link"><NavLink to="/">Home</NavLink></div>
          <div className="link"><NavLink to="/CreatePost">Create</NavLink></div>
          <div className="link"><NavLink to="/PostList">Blog Posts</NavLink></div>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

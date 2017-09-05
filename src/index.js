import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App.js';
import BaseLayout from './components/BaseLayout.js';
import CreatePost from './components/CreatePost.js';
import PostList from './components/PostList.js';
import ShowPost from './components/ShowPost.js';

ReactDOM.render (
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/PostList" component={PostList} />
        <Route path="/CreatePost" component={CreatePost} />
        <Route path="/ShowPost/:_id" component={ShowPost} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import './App.scss';
import { Switch, Link, Route } from 'react-router-dom';

export const App = () => (
  <div>
    React starter pack
    <div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Switch>
        <Route path="/users">
          <div>Users page</div>
        </Route>
        <Route path="/">
          <div>Home page</div>
        </Route>
      </Switch>
    </div>
  </div>
);

import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

export default class App extends React.Component {
  hadleVisible = (event) => {
    const time = document.querySelector('.time');

    if (time.hidden === true) {
      time.hidden = false;
    } else {
      time.hidden = true;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="time">
          Current time:
          {' '}
          {/* Print the time here instead of DevTools */}
          <Clock />
        </p>
        <button
          type="button"
          className="visible"
          onClick={this.hadleVisible}
        >
          Visible
        </button>
        <button
          type="button"
          className="new-name"
        >
          New Name
        </button>
      </div>
    );
  }
}

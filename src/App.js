import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

export default class App extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    prevName: 0,
  }

  componentDidMount() {
    setInterval(() => {
      const time = new Date();

      this.setState(state => ({
        date: time.toLocaleTimeString(),
        prevName: state.name,
        name: this.getRandomInt(10000),
      }));
    }, 1000);
  }

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  hadleVisible = () => {
    const time = document.querySelector('.time');

    time.hidden = !time.hidden;
  }

  handleNewName = () => {
    this.setState(state => ({
      prevName: state.name,
      name: this.getRandomInt(10000),
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="time">
          Current time:
          {' '}
          {/* Print the time here instead of DevTools */}
          <Clock
            date={this.state.date}
            name={this.state.name}
            prevName={this.state.prevName}
          />
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
          onClick={this.handleNewName}
        >
          New Name
        </button>
      </div>
    );
  }
}

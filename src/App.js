import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

export default class App extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    prevName: 0,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      this.setState({ date });
    }, 1000);
  }

  getRandomNum = max => Math.floor(Math.random() * Math.floor(max));

  isClockVisible = () => {
    const visibleClock = document.querySelector('.isClockVisible');

    visibleClock.hidden = !visibleClock.hidden;
  }

  changeNameClock = () => {
    this.setState(state => ({
      prevName: state.name,
      name: this.getRandomNum(10000),
    }));
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from
    ${this.state.prevName} to ${this.state.name}`);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <span className="isClockVisible">
            <Clock
              date={this.state.date}
              prevName={this.state.prevName}
              name={this.state.name}
            />
          </span>
          {' '}
          <button type="button" onClick={this.isClockVisible}>
            Toggle visibility of the сlock
          </button>
          <button type="button" onClick={this.changeNameClock}>
            Change the name of the сlock
          </button>
        </div>
      </div>
    );
  }
}

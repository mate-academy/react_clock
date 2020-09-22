import React from 'react';
import { Clock } from './Components/Clock';
import './App.scss';

export default class App extends React.Component {
  state = {
    date: new Date(),
    name: 0,
    visibility: false,
  }

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      this.setState({ date });
    }, 1000);
  }

  isClockVisible = () => {
    this.setState(state => ({
      visibility: !state.visibility,
    }));
  }

  changeNameClock = () => {
    this.setState((state) => {
      const getRandomNum = Math.floor(Math.random() * Math.floor(1000));

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from
      ${state.name} to ${getRandomNum}`);

      return {
        name: getRandomNum,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <span hidden={this.state.visibility}>
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

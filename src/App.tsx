import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

export class App extends React.PureComponent {
  state = {
    isClockVisible: true,
    time: new Date().toLocaleTimeString(),
    clockName: '0',
  };

  clock = 0;

  randomName = '';

  componentDidMount() {
    this.setState({ time: new Date().toLocaleTimeString() });

    this.clock = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
      // eslint-disable-next-line no-console
      console.log(this.state.time);
    }, 1000);

    this.setState({ isClockVisible: true });
  }

  componentWillUnmount() {
    clearTimeout(this.clock);
    this.setState({ isClockVisible: false });
  }

  setRandomName() {
    this.randomName = Math.floor(Math.random() * 100).toString();
    this.setState({ clockName: this.randomName });
  }

  render() {
    const { time, isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            <Clock name={clockName} />
          </h1>
          <p>
            Current time:
            {' '}
            {isClockVisible ? time : null}
          </p>
          <button
            type="button"
            className="App__visible"
            onClick={() => this.componentDidMount()}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="App__hidden"
            onClick={() => this.componentWillUnmount()}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="App__random-name"
            onClick={() => this.setRandomName()}
          >
            Random name
          </button>
        </div>
      </>
    );
  }
}

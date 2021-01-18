import React from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

export default class App extends React.Component {
  state = {
    isVisible: true,
    timerId: Math.floor(Math.random() * 1000),
  }

  changeId = () => {
    this.setState({
      timerId: Math.floor(Math.random() * 1000),
    });

    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from oldName to newName`);
  }

  hideTimer = () => {
    this.setState(() => (
      { isVisible: false }
    ));
  }

  showTimer = () => {
    this.setState(() => (
      { isVisible: true }
    ));

    // eslint-disable-next-line no-console
    console.log('Started');
  }

  render() {
    const { timerId, isVisible } = this.state;

    return (
      <div className="App">
        <p className="App__timer-name">
          {`#${timerId}`}
        </p>

        <div className="App__time-string">
          Current time:
          {' '}
          {isVisible && <Clock timerId={this.state.timerId} />}
        </div>

        <div className="App__buttons">
          <button
            className="App__button"
            onClick={this.showTimer}
            type="button"
          >
            Start
          </button>
          {' / '}
          <button
            className="App__button"
            onClick={this.hideTimer}
            type="button"
          >
            Stop
          </button>
          {' / '}
          <button
            className="App__button"
            onClick={this.changeId}
            type="button"
          >
            Change number
          </button>
        </div>
      </div>
    );
  }
}

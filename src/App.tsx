import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: '0',
  };

  showTimer = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideTimer = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  getRandomClockName = () => {
    const randomClockName = String(Math.floor(Math.random() * 100));

    this.setState({
      clockName: randomClockName,
    });
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        <p className="app__time" data-cy="time">
          {'Current time: '}
          {
            isClockVisible && <Clock name={clockName} />
          }
          {` (clock name is ${clockName})`}

        </p>
        <button
          type="button"
          className="app__button"
          onClick={this.showTimer}
          disabled={isClockVisible}
        >
          Show
        </button>
        {' '}
        <button
          type="button"
          className="app__button"
          onClick={this.hideTimer}
          disabled={!isClockVisible}
        >
          Hide
        </button>
        {' '}
        <button
          type="button"
          className="app__button"
          onClick={this.getRandomClockName}
        >
          Random clock name
        </button>
      </div>
    );
  }
}

export default App;

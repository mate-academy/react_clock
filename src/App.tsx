import React from 'react';
import './App.scss';
import { Clock } from './components/clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'default',
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
    const randomClockName = String(Math.floor(Math.random() * 1000));

    this.setState({
      clockName: randomClockName,
    });
    // eslint-disable-next-line
    console.log('New name' + randomClockName);
  };

  render() {
    const {
      isClockVisible,
      clockName,
    } = this.state;

    return (
      <div className="App">
        <div className="clock">
          <p className="clock__time" data-cy="time">
            {
              isClockVisible
                ? <Clock name={clockName} />
                : null
            }
            {'    '}
            <span className="clock__name">{clockName}</span>

          </p>
          <button
            type="button"
            className="clock__button"
            onClick={this.showTimer}
            disabled={isClockVisible}
          >
            Show
          </button>
          {' '}
          <button
            type="button"
            className="clock__button"
            onClick={this.hideTimer}
            disabled={!isClockVisible}
          >
            Hide
          </button>
          {' '}
          <button
            type="button"
            className="clock__button"
            onClick={this.getRandomClockName}
          >
            Random clock name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

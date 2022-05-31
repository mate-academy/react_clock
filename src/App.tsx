import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
import { names } from './names';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: names[0],
  };

  getRandomName = () => {
    // eslint-disable-next-line max-len
    this.setState({ name: names[Math.floor(Math.random() * names.length)] });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App container">
        {isClockVisible
        && (
          <Clock name={name} />
        )}
        <div>
          <button
            type="button"
            onClick={this.showClock}
            className="btn btn-outline-success"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="btn btn-outline-warning"
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.getRandomName}
          >
            Set random name
          </button>
        </div>

      </div>
    );
  }
}

export default App;

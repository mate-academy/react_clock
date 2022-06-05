import React from 'react';
import './App.scss';
import { names } from './names';
import { Clock } from './Components/Clock';

class App extends React.Component {
  state = {
    ClockVisibility: false,
    clockName: names[Math.floor(Math.random() * names.length)],
  };

  componentDidMount() {
    this.setState({ ClockVisibility: true });
  }

  randomName = () => {
    // eslint-disable-next-line
    this.setState({ clockName:names[Math.floor(Math.random() * names.length)] });
  };

  hideClock = () => {
    this.setState({ ClockVisibility: false });
  };

  showClock = () => {
    this.setState({ ClockVisibility: true });
  };

  render() {
    const { ClockVisibility, clockName } = this.state;

    return (
      <div className="App component">
        {ClockVisibility && (
          <Clock name={clockName} />
        )}
        <button
          type="button"
          onClick={this.showClock}
          disabled={ClockVisibility}
          className="buttons buttons-info"
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          disabled={!ClockVisibility}
          className="buttons buttons-info"
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.randomName}
          disabled={!ClockVisibility}
          className="buttons buttons-info"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

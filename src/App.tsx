import React from 'react';
import './App.scss';
import Clock from './Components/Clock/Clock';
import { names } from './NamesForClock';

type Props = {
  clockName: string,
  isClockVisible: boolean,
};

class App extends React.Component<{}, Props> {
  state = {
    clockName: 'React clock',
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: names[Math.floor(Math.random() * names.length)],
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1 className="app-name">{clockName}</h1>
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <button
          type="button"
          className="big-button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="big-button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="big-button"
          onClick={this.setRandomName}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;

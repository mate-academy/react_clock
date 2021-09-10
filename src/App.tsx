import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  setRandomName = () => {
    const currentName = this.state.clockName;

    const randomName = Math.ceil(Math.random() * 100);

    this.setState({ clockName: randomName });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${currentName} to ${randomName}`);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <h2>{`Name: ${this.state.clockName}`}</h2>
        <p className="paragraph">
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
        <button
          type="button"
          className="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

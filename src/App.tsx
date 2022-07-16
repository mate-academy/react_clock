import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  clockName: number,
  isVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isVisible: true,
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  setRandomName = () => {
    const randomName = Math.floor(Math.random() * 100);

    this.setState({ clockName: randomName });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isVisible && <Clock name={this.state.clockName} />}

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

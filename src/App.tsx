import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: number;
  visibility: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockName: 0,
    visibility: true,
  };

  showClock = () => {
    this.setState({
      visibility: true,
    });
  };

  hideClock = () => {
    this.setState({
      visibility: false,
    });
  };

  changeName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { clockName, visibility } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {visibility && (
            <Clock clockName={clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={this.showClock}
          disabled={visibility}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
          disabled={!visibility}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.changeName}
        >
          Random Name
        </button>
      </div>
    );
  }
}

export default App;

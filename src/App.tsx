import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <p className="App__clock">
          {isClockVisible && (
            <Clock />
          )}
        </p>

        <button
          type="button"
          className="App__button show"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="App__button hide"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

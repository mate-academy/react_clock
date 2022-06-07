import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React Clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock />
          )}
        </p>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide
        </button>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          {isClockVisible && (
            <p>
              Current time:
              {' '}
              <Clock />
            </p>
          )}
        </div>

        <button type="button" onClick={() => this.setState({ isClockVisible: true })}>
          Show Clock
        </button>
        &nbsp;
        <button type="button" onClick={() => this.setState({ isClockVisible: false })}>
          Hide Clock
        </button>
      </>
    );
  }
}

export default App;

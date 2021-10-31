import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <>
          <div>
            <button
              type="button"
              onClick={() => {
                this.setState({
                  isClockVisible: true,
                });
              }}
            >
              Show Clock
            </button>
            {' '}
            <button
              type="button"
              onClick={() => {
                this.setState({
                  isClockVisible: false,
                });
              }}
            >
              Hide Clock
            </button>
          </div>
        </>
        <p>
          Current time:
          {' '}
          { this.state.isClockVisible && <Clock /> }
        </p>
      </div>
    );
  }
}
export default App;

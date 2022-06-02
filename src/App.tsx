import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <div className="App">
        <>
          <h2>
            {`Clock name: ${this.state.clockName}`}
          </h2>

          <h1>React clock</h1>
          <p>
            {'Current time: '}
            <span>
              {this.state.isClockVisible
                && (<Clock name={this.state.clockName} />)}
            </span>
          </p>
        </>

        <button
          type="button"
          data-cy="time"
          className="btn btn-success"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            this.setState({
              clockName:
                Math.floor(Math.random() * (100 - 1 + 1)) + 1,
            });
          }}
        >
          Set random Clock name
        </button>
      </div>
    );
  }
}

export default App;

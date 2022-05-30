import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <>
          <h1>React clock</h1>
          <p>
            {'Current time: '}
            <span
              className="
            my-time
            bg-info
            p-2
            text-dark
            bg-opacity-50
            "
            >
              {this.state.isClockVisible && (<Clock />)}
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
      </div>
    );
  }
}

export default App;

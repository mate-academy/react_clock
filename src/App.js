import React from 'react';

import './App.scss';
import { Clock } from './componets/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="text-muted">React clock</h1>
        {isClockVisible
          ? <Clock />
          : (
            <p>
              {`Keep waiting: `}
              <span
                className="
                  spinner-border
                  text-primary
                  spinner-grow-sm
                "
                role="status"
              />
            </p>
          )}
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show clock
        </button>
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide clock
        </button>
      </div>
    );
  }
}

export default App;

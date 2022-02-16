import React from 'react';
import './App.scss';

import { Clock } from './clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  setVisible(visible: boolean) {
    this.setState({ isClockVisible: visible });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible ? (
          <>
            <Clock />
            <button
              type="button"
              onClick={() => this.setVisible(false)}
            >
              Hide Clock
            </button>
            <button
              type="button"
              onClick={() => this.setVisible(true)}
            >
              Show Clock
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => this.setVisible(false)}
            >
              Hide Clock
            </button>
            <button
              type="button"
              onClick={() => this.setVisible(true)}
            >
              Show Clock
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;

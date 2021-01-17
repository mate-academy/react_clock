import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <main className="main">
          <h1 className="main__title">React clock</h1>

          {isClockVisible && (
            <Clock name={this.state.clockName} />
          )}

          <div className="buttons-group">
            <button
              type="button"
              className="buttons-group__btn"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="buttons-group__btn"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="buttons-group__btn"
              onClick={() => {
                this.setState({ clockName: Math.random() });
              }}
            >
              Set random name
            </button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

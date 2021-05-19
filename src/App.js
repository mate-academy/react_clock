import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: (Math.random() * 100).toFixed(0),
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        <div className="App__content">
          Current time:
          {' '}
          {this.state.isClockVisible ? <Clock name={name} /> : null}

          <div className="App__buttons">
            <button
              type="button"
              className="App__button"
              onClick={() => {
                this.setState({ isClockVisible: true });
              }}
            >
              Show
            </button>
            {' '}
            <button
              type="button"
              className="App__button"
              onClick={() => {
                this.setState({ isClockVisible: false });
              }}
            >
              Hide
            </button>
            {' '}
            <button
              type="button"
              className="App__button"
              onClick={() => {
                this.setState({ name: (Math.random() * 100).toFixed(0) });
              }}
            >
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

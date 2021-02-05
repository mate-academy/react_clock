import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock">
          {isClockVisible ? <Clock name={clockName} /> : null}
        </div>
        <div className="button">
          <button
            className="btn"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="btn"
            type="button"
            onClick={() => {
              const newName = Math.floor(Math.random() * 100);

              this.setState({ clockName: newName });
              // eslint-disable-next-line
              console.log(`The Clock was renamed from ${clockName} to ${newName}`);
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

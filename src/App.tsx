import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <>

        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {isClockVisible ? <Clock name={this.state.clockName} /> : null}
          </p>

          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="button"
            onClick={() => {
              this.setState({ clockName: (Math.floor(Math.random() * 100)) });
            }}
          >
            Set random name
          </button>
        </div>
      </>
    );
  }
}

export default App;

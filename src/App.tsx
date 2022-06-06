import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock/Clock';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate() {
    // eslint-disable-next-line
    console.log(this.state.clockName);
  }

  generateRandomNumber = () => this.setState({ clockName: Math.random() });

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <p data-cy="time">
          Current time:
          {' '}
          {isClockVisible && <Clock name={clockName} />}
        </p>

        <div className="buttons">
          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show
          </button>

          <button
            type="button"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide
          </button>

          <button
            type="button"
            onClick={() => this.generateRandomNumber()}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

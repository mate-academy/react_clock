import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  clockName: string;
  isClockVisible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: false,
    clockName: '',
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <h3>
          {`Clock Name: ${clockName}`}
        </h3>

        <button
          type="button"
          className="App_button"
          onClick={() => {
            this.setState({
              clockName: `${Math.ceil((Math.random() * 1000))}`,
            });
          }}
        >
          Set Random name
        </button>

        <p data-cy="time">
          Current time:
          {' '}
          {isClockVisible && (
            <Clock />
          )}
        </p>

        <button
          type="button"
          className="App_button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show clock
        </button>

        <button
          type="button"
          className="App_button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

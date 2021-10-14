import React from 'react';
import './App.scss';
import { Timer } from './Timer';

type Props = {};
type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: !isClockVisible });
          }}
        >
          {!isClockVisible ? 'Show Clock' : 'Hide Clock'}
        </button>
        <p>
          Current time:
          {isClockVisible && (
            <Timer
              isClockVisible={isClockVisible}
              clockName={clockName}
            />
          )}
        </p>
        <div>
          <p>
            {`Clock name is: ${clockName}`}
          </p>
          <button
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.round(Math.random() * 100) });
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

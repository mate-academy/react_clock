import React from 'react';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  renameClock = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        <div className="clock">
          {isClockVisible && <Clock name={clockName} />}

          <div>
            <button
              type="button"
              onClick={() => this.setState({
                isClockVisible: true,
              })}
            >
              Show Clock
            </button>

            <button
              type="button"
              onClick={() => this.setState({
                isClockVisible: false,
              })}
            >
              Hide Clock
            </button>

            <button
              type="button"
              onClick={this.renameClock}
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

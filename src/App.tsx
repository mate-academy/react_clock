import React from 'react';
import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  timerId: NodeJS.Timer = setInterval(() => {
    const date: Date = new Date();

    if (this.state.isClockVisible) {
      // eslint-disable-next-line
      console.log(date.toLocaleTimeString());

    }
  }, 1000);

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible
        && (
          <Clock
            data-cy="time"
            timerId={this.timerId}
            name={this.state.clockName}
          />
        )}
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

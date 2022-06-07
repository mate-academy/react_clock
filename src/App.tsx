import React from 'react';
import './App.scss';
import Clock from './Clock';

const timerId: NodeJS.Timer = setInterval(() => {
  const date: Date = new Date();

  // eslint-disable-next-line
  console.log(date.toLocaleTimeString());
}, 1000);

// eslint-disable-next-line
console.log(timerId);

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock data-cy="time" timerId={timerId} />}
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
      </div>
    );
  }
}

export default App;

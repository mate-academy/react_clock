/* eslint-disable no-console */
import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  date: string;
  hasClock: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state = {
    date: new Date().toLocaleTimeString(),
    hasClock: true,
    clockName: getRandomName(),
  };

  componentDidMount() {
    window.setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);

    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.removeClock);
    document.addEventListener('click', this.addClock);
  }

  componentDidUpdate(_: {}, prevState : State) {
    if (prevState.clockName !== this.state.clockName) {
      console.log(`Renamed from <${prevState.clockName}> to <${this.state.clockName}>`);
    }
  }

  removeClock = () => {
    this.setState({ hasClock: false });
  };

  addClock = () => {
    this.setState({ hasClock: true });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">
            {this.state.clockName}
          </strong>

          {' time is '}
          {this.state.hasClock && (
            <span className="Clock__time">
              {this.state.date}
              {console.log(this.state.date)}
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default App;

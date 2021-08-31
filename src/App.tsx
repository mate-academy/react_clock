import React from 'react';
import { Clock } from './components/Clock/Clock';
import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomName = () => {
    const randomName = Math.round(Math.random() * 1000);
    const oldName = this.state.clockName;

    this.setState({
      clockName: randomName,
    });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`);
  };

  showRandomName = () => {
    setTimeout(this.setRandomName, 0);
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {
          this.state.isClockVisible
        && (
          <p>
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
        )
        }
        <button
          className="App__button"
          type="submit"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          className="App__button"
          type="submit"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          className="App__button"
          type="submit"
          onClick={this.showRandomName}
        >
          Set random name
        </button>

      </div>
    );
  }
}
export default App;

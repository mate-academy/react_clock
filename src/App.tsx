import React from 'react';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomName = () => {
    const randomNumber = Math.round(Math.random() * 1000);

    this.setState({ clockName: randomNumber });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`Clock Name: ${clockName}`}</p>
        <p>
          <p>Local time:</p>
          {isClockVisible && (
            <Clock from={clockName} />
          )}
        </p>
        <button
          type="button"
          onClick={this.showClock}
        >
          Start
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Stop
        </button>

        {/* <br /> */}

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Random Clock Name
        </button>
      </div>
    );
  }
}

export default App;

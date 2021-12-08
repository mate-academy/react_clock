import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  clockVisible: boolean;
  nameOfClock: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisible: true,
    nameOfClock: 'Time to approve my task',
  };

  randomClockNames = [
    'Time to study JS',
    'Time to relax',
    'Time to study React',
    'Time to think about where to celebrate the New Year',
  ];

  makeClockVisible = () => {
    this.setState({ clockVisible: true });
  };

  makeClockHidden = () => {
    this.setState({ clockVisible: false });
  };

  changeName = () => {
    const indexOfRandomName = Math.floor(
      this.randomClockNames.length * Math.random(),
    );

    this.setState({
      nameOfClock: this.randomClockNames[indexOfRandomName],
    });
  };

  render() {
    const { clockVisible, nameOfClock } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          React clock
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.makeClockVisible}
            disabled={clockVisible}
          >
            Show Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.changeName}
            disabled={!clockVisible}
          >
            Rename Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.makeClockHidden}
            disabled={!clockVisible}
          >
            Hide Clock
          </button>
        </div>

        {clockVisible && (
          <Clock name={nameOfClock} />
        )}
      </div>
    );
  }
}

export default App;

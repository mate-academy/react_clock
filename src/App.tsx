import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockVisible: boolean;
  nameOfClock: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    clockVisible: true,
    nameOfClock: 'React clock',
  };

  randomClockNames = ['React 1 clock', 'React 2 clock', 'React 3 clock', 'React 5 clock', 'JoJo time', 'Time to cook pizza'];

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
          React current clock
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.makeClockVisible}
          >
            Show Clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.changeName}
          >
            Change name
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.makeClockHidden}
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

import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type Props = {};

type State = {
  clockVisible: boolean;
  nameOfClock: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    clockVisible: true,
    nameOfClock: 'React clock',
  };

  randomClockNames = ['React 1 clock', 'React 2 clock', 'React 3 clock', 'React 5 clock'];

  makeVisibleClock = () => {
    this.setState({ clockVisible: true });
  };

  makeHiddenClock = () => {
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
            onClick={this.makeVisibleClock}
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
            onClick={this.makeHiddenClock}
          >
            Hide Clock
          </button>
        </div>

        <>
          {clockVisible && (
            <Clock name={nameOfClock} />
          )}
        </>
      </div>
    );
  }
}

export default App;

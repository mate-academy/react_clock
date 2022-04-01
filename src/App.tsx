import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  words = ['Rock', 'Paper', 'Scissors', 'Cat', 'People', 'Dog', 'Summer'];

  number = Math.floor(Math.random() * this.words.length);

  state = {
    isClockVisible: true,
    clockName: this.words[Math.floor(Math.random() * this.words.length)],
  };

  showButton = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideButton = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  changeName = () => {
    this.setState({
      clockName: this.words[Math.floor(Math.random() * this.words.length)],
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="buttonsList">
          <div className="button">
            <button
              type="button"
              onClick={this.showButton}
            >
              Show Clock
            </button>
          </div>

          <div className="button">
            <button
              type="button"
              onClick={this.hideButton}
            >
              Hide Clock
            </button>
          </div>

          <div className="button">
            <button
              type="button"
              onClick={this.changeName}
            >
              {clockName}
            </button>
          </div>
        </div>

        {isClockVisible
          ? (
            <div className="time">
              Current time:
              {' '}
              <Clock name={this.state.clockName} />
            </div>
          )
          : (
            <div className="time">
              <p>Clock is hidden</p>
            </div>
          )}
      </div>
    );
  }
}

export default App;

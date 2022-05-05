import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'mood',
  };

  clockVisible = () => {
    this.setState({ isClockVisible: true });
  };

  clockNotVisible = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    const arrayOfNames = ['smile', 'sad', 'sick', 'happy', 'peppy', 'relax'];

    this.setState({
      clockName: arrayOfNames[
        Math.floor(Math.random() * arrayOfNames.length)],
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>

        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.clockVisible}
          >
            show
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.clockNotVisible}
          >
            hide
          </button>

          <button
            className="app__button"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>

        <p className="app__subtitle">
          Current time:
          {' '}
          {this.state.isClockVisible
            && <Clock name={this.state.clockName} />}
        </p>
      </div>
    );
  }
}

export default App;

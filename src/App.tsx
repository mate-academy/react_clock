import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  clockVisibilityHandler = (isVisivle: boolean): void => {
    this.setState({ isClockVisible: isVisivle });
  };

  createRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: Math.round(Math.random() * 1000),
      });
    }
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && <Clock name={clockName} />}
        <button
          className="App__button App__button--main"
          type="button"
          onClick={() => this.clockVisibilityHandler(true)}
        >
          Show
        </button>

        {isClockVisible && (
          <button
            className="App__button"
            type="button"
            onClick={() => this.clockVisibilityHandler(false)}
          >
            Hide
          </button>
        )}

        {isClockVisible && (
          <button
            className="App__button"
            type="button"
            onClick={this.createRandomName}
          >
            Set random name
          </button>
        )}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  onShowClicked = () => {
    this.setState({ isClockVisible: true });
  };

  onHideClicked = () => {
    this.setState({ isClockVisible: false });
  };

  onSetRandomNameClicked = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 1000) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button type="button" onClick={this.onShowClicked}>
          Show clock
        </button>

        <button type="button" onClick={this.onHideClicked}>
          Hide clock
        </button>

        <button type="button" onClick={this.onSetRandomNameClicked}>
          Set random name
        </button>
        {isClockVisible && (
          <Clock name={clockName} />
        )}
      </div>
    );
  }
}

export default App;

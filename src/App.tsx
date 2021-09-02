import React from 'react';
import { Clock } from './component/Clock';
import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  clockHidden = () => {
    this.setState({ isClockVisible: false });
  };

  clockVisible = () => {
    this.setState({ isClockVisible: true });
  };

  setClockName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        <button
          className="App__button"
          type="button"
          onClick={this.clockVisible}
        >
          Show Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={this.clockHidden}
        >
          Hide Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={this.setClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

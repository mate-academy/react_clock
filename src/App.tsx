import React from 'react';

import './App.scss';

import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const show = () => {
      this.setState({ isClockVisible: true });
    };

    const hide = () => {
      this.setState({ isClockVisible: false });
    };

    const setRandomName = () => {
      if (!this.state.isClockVisible) {
        return;
      }

      const randomNumber = Math.round(Math.random() * 100000);

      this.setState({ clockName: randomNumber });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}

          <br />

          <button type="button" onClick={show}>Show Clock</button>

          <button type="button" onClick={hide}>Hide Clock</button>

          <button type="button" onClick={setRandomName}>Set random name</button>
        </p>
      </div>
    );
  }
}

export default App;

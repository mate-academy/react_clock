import React from 'react';
import Clock from './components/Clock';
import { generateName } from './utils';

import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: generateName(),
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setName = () => {
      this.setState({ clockName: generateName() });
    };

    return (
      <div className="App">
        <h1>{`Clock ${clockName}`}</h1>

        {isClockVisible && <Clock name={clockName} />}

        <div className="controls">
          <button type="button" onClick={showClock}>Show Clock</button>
          <button type="button" onClick={hideClock}>Hide Clock</button>
          <button type="button" onClick={setName}>Set random name</button>
        </div>
      </div>
    );
  }
}

export default App;

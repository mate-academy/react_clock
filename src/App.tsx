import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    const showClock = () => {
      return this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      return this.setState({ isClockVisible: false });
    };

    return (
      <div className="clocks">
        <h1>ReactClocks</h1>
        {isClockVisible && <Clock />}

        <button type="button" onClick={showClock}>Show Clock</button>
        <button type="button" onClick={hideClock}>Hide Clock</button>
      </div>
    );
  }
}

export default App;

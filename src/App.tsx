import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

type Props = {

};

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate(_oldProps: Props, oldState: State) {
    if (oldState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${oldState.clockName} to ${this.state.clockName}`);
    }
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const setClockName = () => {
      this.setState({ clockName: Math.floor(Math.random() * 10) });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
        <button type="button" onClick={showClock}>Show Clock</button>
        <button type="button" onClick={hideClock}>Hide Clock</button>
        <button type="button" onClick={setClockName}>Set random name</button>
      </div>
    );
  }
}

export default App;

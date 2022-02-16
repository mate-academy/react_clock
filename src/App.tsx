import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean,
  name: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    name: 0,
  };

  componentDidUpdate(prevState: State) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  render() {
    const { isClockVisible, name } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const clockName = () => {
      this.setState({ name: Math.floor(Math.random() * 100) });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={clockName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={name} />}
      </div>
    );
  }
}

export default App;

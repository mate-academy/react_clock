import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

const randomNames = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

type State = {
  isVisible: boolean,
  name: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
    name: 'Name-zero',
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  setNewName = () => {
    const newClockName = `Name-${randomNames[Math.floor(Math.random() * 7)]}`;

    this.setState((prevState) => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.name} to ${newClockName}`);

      return { name: newClockName };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button type="button" onClick={this.setNewName}>
          Set random name
        </button>
        <br />

        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        { (this.state.isVisible) && (
          <Clock name={this.state.name} />
        )}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean,
  name: number
};

class App extends React.Component<{}, State> {
  state = {
    isVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };

  setName = () => {
    const random = Math.floor(Math.random() * 100);

    this.setState({
      name: random,
    });
  };

  render() {
    const {
      isVisible,
      name,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Name:
          {name}
        </p>
        <button
          type="button"
          onClick={this.showClock}
        >
          Hide/Show Clock
        </button>
        <button
          type="button"
          onClick={this.setName}
        >
          Rename
        </button>
        <p>
          Current time:
          {isVisible && <Clock name={name} />}
        </p>
      </div>
    );
  }
}

export default App;

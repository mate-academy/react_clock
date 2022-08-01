import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Math.random().toString().slice(2, 6);

  return `Clock-${value}`;
}

type State = {
  isClockVisible: boolean;
  name: string;
};

class App extends Component<{}, State> {
  state: State = {
    isClockVisible: true,
    name: getRandomName(),
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">React clock</h1>

        {isClockVisible && <Clock name={this.state.name} />}

        <button
          type="button"
          className="App__button show"
          onClick={() => this.setState({ isClockVisible: true })}
          disabled={this.state.isClockVisible}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="App__button hide"
          onClick={() => this.setState({ isClockVisible: false })}
          disabled={!this.state.isClockVisible}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

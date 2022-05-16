import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'First Clock',
  };

  randomClockNames = [
    'First Clock',
    'Second Clock',
    'Third Clock',
    'Fourth Clock',
    'Fifth Clock',
    'Sixth Clock',
  ];

  componentDidUpdate(_prevProps: never, prevState: State) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  setRandomName = () => {
    if (this.state.isClockVisible) {
      const index = Math.floor(Math.random() * 6);

      this.setState({
        clockName: this.randomClockNames[index],
      });
    }
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <h2 data-cy="time">
          Current time:
          {' '}
          {isClockVisible && <Clock name={this.state.clockName} />}
        </h2>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          className="App__button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

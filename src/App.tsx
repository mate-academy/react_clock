import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  name: number,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState((oldName) => {
        const newName = Math.ceil(Math.random() * 1000);

        // eslint-disable-next-line no-console
        console.log(`The Clock was renamed from ${oldName.name} to ${newName}`);

        return {
          name: newName,
        };
      });
    }
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="clock">
          <div>{`Random name: ${name}`}</div>

          {isClockVisible && <Clock name={name} /> }

          <button
            type="button"
            className="clock__button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="clock__button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="clock__button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

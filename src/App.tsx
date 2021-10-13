import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  visibleClock: boolean;
  clock: number;
};

export class App extends React.Component<{}, State> {
  state: State = {
    visibleClock: true,
    clock: 0,
  };

  showClock = () => {
    this.setState({ visibleClock: true });
  };

  hideClock = () => {
    this.setState({ visibleClock: false });
  };

  setRandomName = () => {
    this.setState({ clock: Math.round(Math.random() * 100) });
  };

  render() {
    const { visibleClock, clock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <div>
            {visibleClock && <Clock name={clock} />}
          </div>
          <div className="buttons">
            <button type="button" className="buttonChange" onClick={this.showClock}>
              Show clock
            </button>
            <button type="button" className="buttonChange" onClick={this.hideClock}>
              Hide clock
            </button>
            <button type="button" className="buttonRandom" onClick={this.setRandomName}>
              Random Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

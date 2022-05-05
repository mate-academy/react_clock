import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  turnOnClock: boolean;
  nameClock: string;
};

class App extends React.Component<{}, State> {
  state = {
    turnOnClock: false,
    nameClock: 'Johnny Cage',
  };

  showClock = () => {
    this.setState({ turnOnClock: true });
  };

  hideClock = () => {
    this.setState({ turnOnClock: false });
  };

  renameClock = () => {
    const names = ['Longines', 'Harry Winston',
      'Piaget', 'Cartier', 'Jaeger-LeCoultre'];

    const newNames = names[Math.floor(Math.random() * names.length)];

    this.setState({ nameClock: newNames });
  };

  render() {
    const { turnOnClock, nameClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {turnOnClock && <Clock name={nameClock} />}
        <button
          className="button button--start"
          type="button"
          onClick={this.showClock}
        >
          Turn on clock
        </button>

        <button
          className="button button--edit"
          type="button"
          onClick={this.hideClock}
        >
          Hide clock
        </button>

        <button
          className="button button--end"
          type="button"
          onClick={this.renameClock}
        >
          Rename clock
        </button>
      </div>
    );
  }
}

export default App;

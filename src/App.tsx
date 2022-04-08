import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  visibleOfClock: boolean;
  nameClock: string;
};

class App extends React.Component<{}, State> {
  state = {
    visibleOfClock: true,
    nameClock: 'Johnny Cage',
  };

  showClock = () => {
    this.setState({ visibleOfClock: true });
  };

  hideClock = () => {
    this.setState({ visibleOfClock: false });
  };

  clockName = () => {
    const names = ['Longines', 'Harry Winston', 'Piaget', 'Cartier', 'Jaeger-LeCoultre'];
    const newName = names[Math.floor(Math.random() * names.length)];

    this.setState({ nameClock: newName });
  };

  render() {
    const { visibleOfClock, nameClock } = this.state;

    return (
      <div className="App">
        {visibleOfClock && <Clock name={nameClock} />}
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>

        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={this.clockName}>
          Rename clock
        </button>
      </div>
    );
  }
}

export default App;

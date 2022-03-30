import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  visible: boolean;
  nameClock: string;
};

class App extends React.Component < {}, State> {
  state = {
    visible: true,
    nameClock: 'Johnny Cage',
  };

  render() {
    const { visible, nameClock } = this.state;

    const showClock = () => {
      this.setState({ visible: true });
    };

    const hideClock = () => {
      this.setState({ visible: false });
    };

    const clockName = () => {
      const names = ['Longines', 'Harry Winston', 'Piaget', 'Cartier', 'Jaeger-LeCoultre'];
      const newName = names[Math.floor(Math.random() * names.length)];

      this.setState({ nameClock: newName });
    };

    return (
      <div className="App">
        {visible && <Clock name={nameClock} />}
        <button type="button" onClick={showClock}>
          Show clock
        </button>

        <button type="button" onClick={hideClock}>
          Hide Clock
        </button>

        <button type="button" onClick={clockName}>
          Rename clock
        </button>
      </div>
    );
  }
}

export default App;

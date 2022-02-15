import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'Chasiki',
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const nameClock = () => {
      const names = ['Kotlu', 'Hodiki', 'Chasishki', 'Tikalu', 'Bregetu', 'Vremia KUSHAC'];

      const newName = names[Math.floor(Math.random() * names.length)];

      this.setState({ clockName: newName });
    };

    return (
      <div className="App">
        {isClockVisible && <Clock name={clockName} />}
        <div className="buttons">
          <button
            className="buttons__item"
            type="button"
            onClick={showClock}
          >
            Show Clock
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={hideClock}
          >
            Hide Clock
          </button>

          <button
            className="buttons__item"
            type="button"
            onClick={nameClock}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

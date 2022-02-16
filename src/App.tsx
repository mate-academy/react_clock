import React from 'react';
import './App.scss';
import Clock from './Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: '',
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
      const names = ['G-Shock', 'Baby-G', 'Edifice', 'Sheen', 'Pro-trek'];

      const newName = names[Math.floor(Math.random() * names.length)];

      this.setState({ clockName: newName });
    };

    return (
      <div className="app">
        <h1 className="app__title">React clock</h1>
        <p className="app__name">
          {isClockVisible && <Clock name={clockName} />}
        </p>
        <div className="app__buttons">
          <button
            type="button"
            onClick={showClock}
          >
            Show clock
          </button>

          <button
            type="button"
            onClick={hideClock}
          >
            Hide clock
          </button>

          <button
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

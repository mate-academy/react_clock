import React from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean;
  name: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    name: 'React clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomNameForTitle = () => {
    const nameOfClock = ['React clock 1', 'React clock 2', 'React clock 3', 'React clock 4'];
    const randomElement = nameOfClock[Math.floor(Math.random() * nameOfClock.length)];

    this.setState({ name: randomElement });
  };

  render() {
    const { isClockVisible, name } = this.state;
    const { showClock, hideClock, randomNameForTitle } = this;

    return (
      <div className="App">
        <div className="clock App__clock">
          <div className="clock__time">
            {isClockVisible
              ? (<Clock clockName={name} />)
              : ('Press Show Clock button to see Clock')}
          </div>
          <div className="clock__buttons-wrap">
            <button
              type="button"
              className="clock__button"
              onClick={showClock}
            >
              Show clock
            </button>
            <button
              type="button"
              className="clock__button"
              onClick={hideClock}
            >
              Hide clock
            </button>
            <button
              type="button"
              className="clock__button"
              onClick={randomNameForTitle}
            >
              Change name
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

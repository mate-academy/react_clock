import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'Clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const randomNames = ['First Clock', 'Second Clock', 'Third Clock', 'Fourth Clock', 'Fifth Clock'];
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

    this.setState(oldName => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName.clockName} to ${randomName}`);

      return { clockName: randomName };
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const { showClock, hideClock, setRandomName } = this;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          <div>
            {isClockVisible
              && <Clock clockName={clockName} />}
          </div>
          <div className="buttons">
            <button
              type="button"
              className="button__show"
              onClick={showClock}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="button__hide"
              onClick={hideClock}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="button__name"
              onClick={setRandomName}
            >
              Random Name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

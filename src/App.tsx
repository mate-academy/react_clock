import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: string,
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'React Clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hiddenClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show clock
          </button>

          <button
            type="button"
            className="App__button"
            onClick={this.hiddenClock}
            disabled={!isClockVisible}
          >
            Hidden clock
          </button>
        </div>

        <div className="App__clock">
          {isClockVisible && <Clock clockName={clockName} />}
        </div>
      </div>
    );
  }
}

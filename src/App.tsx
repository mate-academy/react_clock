import * as React from 'react';
import './App.scss';
import { Clock } from './Clock';

function makeName(length: number) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random()
    * charactersLength));
  }

  return result;
}

interface State {
  isClockVisible: boolean;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'a clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    this.setState({ clockName: makeName(10) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="allClock">
          <div className="clock">
            <h1 className="clock__name">{`React clock "${clockName}"`}</h1>
            <p>
              Current time:
              {' '}
              {isClockVisible && <Clock clockName={clockName} /> }
            </p>
          </div>

          <div className="buttons">
            <button
              className="button"
              type="button"
              onClick={this.hideClock}
            >
              Hide Clock💀
            </button>

            <button
              className="button"
              type="button"
              onClick={this.setRandomName}
            >
              Set random name
            </button>

            <button
              className="button"
              type="button"
              onClick={this.showClock}
            >
              Show Clock💀
            </button>
          </div>
        </div>
      </div>
    );
  }
}

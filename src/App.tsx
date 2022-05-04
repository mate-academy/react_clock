import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  render() {
    // eslint-disable-next-line max-len
    const names = ['Clock', 'Another Clock', 'React Clock', 'React', 'Clock Name', 'Random Name'];
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">{clockName}</h1>

        {isClockVisible && (
          <p data-cy="time" className="clock">
            Current time:
            {' '}
            <Clock name={clockName} />
          </p>
        )}

        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
            className="clock-button"
            disabled={isClockVisible}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
            disabled={!isClockVisible}
            className="clock-button"
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={() => {
              const randomizedIndex = Math.floor(Math.random() * names.length);

              this.setState({ clockName: names[randomizedIndex] });
            }}
            className="clock-button"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

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
    const names = ['Clock', 'Another Clock', 'React Clock', 'React', 'Clock Name'];

    return (
      <div className="App">
        <h1>{this.state.clockName}</h1>

        {this.state.isClockVisible && (
          <p data-cy="time">
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            const randomized = names[Math.floor(Math.random() * names.length)];

            this.setState({ clockName: randomized });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

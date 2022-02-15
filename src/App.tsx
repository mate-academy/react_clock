import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Toggle = {
  toggle: boolean;
  clockName: number | null;
};

class App extends React.Component<{}, Toggle> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    toggle: true,
    clockName: null,
  };

  render(): React.ReactNode {
    const { toggle, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {clockName && (
          <h2>{`Clock's name: ${clockName}`}</h2>
        )}
        {toggle && (
          <p>
            Current time:
            {' '}
            <Clock name={clockName} />
          </p>
        )}

        <button
          type="button"
          onClick={() => this.setState({ toggle: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ toggle: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.floor(Math.random() * 30) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;

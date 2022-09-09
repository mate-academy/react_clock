import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock
        && <Clock />}
        <button
          type="button"
          onContextMenu={(event) => {
            this.setState({ hasClock: false });
            event.preventDefault();
          }}
          onClick={() => {
            this.setState({ hasClock: true });
          }}
        >
          switcher
        </button>
      </div>
    );
  }
}

import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p data-cy="time">
          Current time:
          {' '}
          {
            this.state.isClockVisible
            && (<Clock />)
          }
        </p>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide it
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show it
        </button>
        <p>&copy; All rights reserved</p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          {'Current time: '}
          <span data-cy="time">
            { this.state.isClockVisible && (<Clock />)}
          </span>
        </p>

        <div>
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
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;

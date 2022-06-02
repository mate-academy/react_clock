import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName?: number;
};

export class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        <p className="App__clock-name">
          {`Clock number: ${this.state.clockName}`}
        </p>

        <p className="App__time">
          {'Current time: '}
          <span data-cy="time">
            {
              this.state.isClockVisible
              && (<Clock name={this.state.clockName} />)
            }
          </span>
        </p>

        <div className="App__buttons">
          <button
            type="button"
            className="App__buttons-hide"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="App__buttons-show"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="App__buttons-name"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 100 + 1) });
            }}
          >
            Change Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;

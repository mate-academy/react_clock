import React, { ReactNode } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<Props, State> {
  state: State = {
    isClockVisible: false,
    clockName: 0,
  };

  render(): ReactNode {
    return (
      <div className="app">
        <h1 className="app__title">
          React clock
        </h1>

        <div className="app__text">
          Current time:
        </div>

        <div className="app__clock">
          {this.state.isClockVisible
            ? <Clock clockName={this.state.clockName} />
            : <br />}
        </div>

        <div className="app__button-appear">
          <button
            type="button"
            className="app__button-show"
            onClick={() => this.setState({
              isClockVisible: true,
            })}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="app__button-hide"
            onClick={() => this.setState({
              isClockVisible: false,
            })}
          >
            Hide Clock
          </button>
        </div>

        <button
          type="button"
          className="app__button-random"
          onClick={() => this.setState({
            clockName: Math.round(Math.random() * 100),
          })}
        >
          Set random name
        </button>
      </div>

    );
  }
}

export default App;

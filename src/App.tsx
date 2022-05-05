import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  clockName: number,
  isClockVisible: boolean,
};

export class App extends React.Component<Props, State> {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">{`React clock #${clockName}`}</h1>

        {isClockVisible && <Clock clockName={clockName} />}

        <div className="app__buttons">
          <button
            className="app__button"
            type="submit"
            onClick={() => this.setState({ isClockVisible: true })}
            disabled={isClockVisible}
          >
            Show Clock
          </button>

          <button
            className="app__button"
            type="submit"
            onClick={() => this.setState({ isClockVisible: false })}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            className="app__button"
            type="submit"
            onClick={() => (
              this.setState({ clockName: Math.floor(Math.random() * 100) })
            )}
          >
            Set name
          </button>
        </div>
      </div>
    );
  }
}

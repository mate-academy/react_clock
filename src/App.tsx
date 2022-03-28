import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomNum() {
    this.setState({ clockName: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <div className="App">
        <h3>react clock</h3>
        {
          this.state.isClockVisible
          && (<Clock name={this.state.clockName} />)
        }
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            show clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            hide clock
          </button>
          <br />
          <button
            type="button"
            onClick={() => {
              this.setRandomNum();
            }}
          >
            set random name
          </button>
        </div>
      </div>
    );
  }
}

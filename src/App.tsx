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

  setRandomNum = () => {
    this.setState({ clockName: Math.floor(Math.random() * 10) });
  };

  changeVisibility = (isVisible: boolean) => {
    this.setState((state) => ({
      ...state,
      isClockVisible: !isVisible,
    }));
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h3>react clock</h3>
        {
          isClockVisible
          && (<Clock name={clockName} />)
        }
        <div className="buttons">
          <button
            type="button"
            onClick={() => this.changeVisibility(isClockVisible)}
          >
            show clock
          </button>
          <button
            type="button"
            onClick={() => this.changeVisibility(isClockVisible)}
          >
            hide clock
          </button>
          <br />
          <button
            type="button"
            onClick={() => this.setRandomNum()}
          >
            set random name
          </button>
        </div>
      </div>
    );
  }
}

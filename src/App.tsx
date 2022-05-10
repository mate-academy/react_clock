import React from 'react';
import './App.scss';

import { Clock } from './Components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  visible = (visibility: boolean) => {
    this.setState({ isClockVisible: visibility });
  };

  randomName = () => {
    this.setState({ clockName: Math.round(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && (
          <Clock clockName={clockName} />
        )}
        <button
          type="button"
          onClick={() => this.visible(true)}
          disabled={isClockVisible}
        >
          Show
        </button>
        <button
          type="button"
          onClick={() => this.visible(false)}
          disabled={!isClockVisible}
        >
          Hide
        </button>
        <button
          type="button"
          onClick={this.randomName}
          disabled={!isClockVisible}
        >
          Random name
        </button>
      </div>
    );
  }
}

export default App;

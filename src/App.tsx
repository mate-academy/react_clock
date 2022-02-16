import React from 'react';
// import { isThisTypeNode } from 'typescript';
import './App.scss';
import { Clock } from './Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p>{this.state.isClockVisible && <Clock />}</p>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

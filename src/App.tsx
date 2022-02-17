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

  show = () => {
    this.setState({ isClockVisible: true });
  };

  hide = () => {
    this.setState({ isClockVisible: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p>{this.state.isClockVisible && <Clock />}</p>
        <button
          type="button"
          onClick={this.show}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hide}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

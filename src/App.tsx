import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  clockVisible: boolean,
  number: number,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component<{}, State> {
  state: State = {
    clockVisible: true,
    number: 0,
  };

  show() {
    this.setState({ clockVisible: true });
  }

  hide() {
    this.setState({ clockVisible: false });
  }

  random() {
    this.setState({ number: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock </h1>
        {this.state.number}
        <div>
          <button
            onClick={() => this.show()}
            type="button"
            className="button"
          >
            Show Clock
          </button>
          <button
            onClick={() => this.hide()}
            type="button"
            className="button"
          >
            Hide Clock
          </button>
          <button
            onClick={() => this.random()}
            type="button"
            className="button"
          >
            Random
          </button>
        </div>
        {this.state.clockVisible && (
          <Clock />
        )}
      </div>
    );
  }
}

export default App;

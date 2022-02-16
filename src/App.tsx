import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  changeClockVisibility = (isClockVisible: boolean) => {
    this.setState({
      isClockVisible,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock />}
        </p>
        <button
          type="button"
          onClick={() => this.changeClockVisibility(true)}
        >
          Show clock
        </button>

        <button
          type="button"
          onClick={() => this.changeClockVisibility(false)}
        >
          Hide clock
        </button>
      </div>
    );
  }
}

export default App;

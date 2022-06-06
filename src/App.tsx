import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  isClockVisible: boolean;
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
        <h1>React Clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock />}
        </p>
        <button type="button" onClick={() => this.changeClockVisibility(true)}>
          Show Clock
        </button>

        <button type="button" onClick={() => this.changeClockVisibility(false)}>
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;

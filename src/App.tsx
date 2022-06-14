import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  visibleClock: boolean
};

export class App extends React.Component<Props, State> {
  state = {
    visibleClock: true,
  };

  showClock = () => {
    this.setState({ visibleClock: true });
  };

  hideClock = () => {
    this.setState({ visibleClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.visibleClock && <Clock />}
        </p>
        <div>
          <button type="button" onClick={this.showClock}>Show Clock</button>
          <button type="button" onClick={this.hideClock}>Hide Clock</button>
        </div>
      </div>
    );
  }
}

export default App;

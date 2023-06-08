import { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

interface State {
  hasClock: boolean;
}

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        { this.state.hasClock && <Clock />}
      </div>
    );
  }
}

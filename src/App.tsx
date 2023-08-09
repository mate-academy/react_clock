import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface AppState {
  clockName: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    clockName: 'Clock-0',
  };

  render() {
    return (
      <div className="App">
        <Clock name={this.state.clockName} />
      </div>
    );
  }
}

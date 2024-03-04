import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
  };

  hendlerClockSwitcher = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    } else {
      this.setState({ hasClock: true });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock changeClockStatus={this.hendlerClockSwitcher} />
        )}
      </div>
    );
  }
}

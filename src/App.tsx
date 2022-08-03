import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}

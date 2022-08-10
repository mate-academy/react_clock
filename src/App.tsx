import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.Component < {}, State> {
  state = {
    hasClock: true,
  };

  componentDidMount() {
    window.addEventListener('contextmenu', () => {
      this.setState({
        hasClock: false,
      });
    });

    window.addEventListener('click', () => {
      this.setState({
        hasClock: true,
      });
    });
  }

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock />
        )}
      </div>
    );
  }
}

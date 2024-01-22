import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

type Props = {};

type State = {
  hasClock: boolean
};

export class App extends React.Component<Props, State> {
  state = {
    hasClock: false,
  };

  componentDidMount(): void {
    document.addEventListener('mousedown', () => {
      this.setState({ hasClock: true });
    });

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('mousedown', () => {
      this.setState({ hasClock: true });
    });

    document.removeEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock ? (
          <Clock />
        ) : ('')}
      </div>
    );
  }
}

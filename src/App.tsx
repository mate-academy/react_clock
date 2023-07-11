import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.toggleClock);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.toggleClock);
  }

  toggleClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prevState => ({
      hasClock: !prevState.hasClock,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock />}
      </div>
    );
  }
}

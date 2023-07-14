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
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  componentWillUnmount() {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
  }

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: true,
    });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock />}
      </div>
    );
  }
}

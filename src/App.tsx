import React from 'react';
import { Clock } from './Clock';

import './App.scss';

type Props = {};

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightMouseClick);
    document.addEventListener('click', this.handleLeftMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.handleRightMouseClick);
    document.removeEventListener('click', this.handleLeftMouseClick);
  }

  handleRightMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleLeftMouseClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}

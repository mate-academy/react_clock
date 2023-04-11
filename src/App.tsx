/* eslint-disable no-console */
import { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameTimer = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);

    this.clockNameTimer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  handleRightClick = (event : Event) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}

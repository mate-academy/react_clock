import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  onLeftClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      hasClock: true,
    });
  };

  onRightClick = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  clockTimerId;

  componentDidMount(): void {
    this.clockTimerId = setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
    window.document.addEventListener('click', this.onLeftClick);
    window.document.addEventListener('contextmenu', this.onRightClick);
  }

  componentWillUnmount(): void {
    window.document.removeEventListener('contextmenu', this.onRightClick);
    window.document.removeEventListener('click', this.onLeftClick);

    clearInterval(this.clockTimerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}

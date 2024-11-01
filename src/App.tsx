import React from 'react';
import './App.scss';
import { Clock } from './components/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timer = 0;

  onShowLeftClick = () => {
    this.setState({ hasClock: true });
  };

  onHideRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.timer = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.onShowLeftClick);
    document.addEventListener('contextmenu', this.onHideRightClick);
  }

  componentWillUnmount(): void {
    clearInterval(this.timer);

    document.removeEventListener('click', this.onShowLeftClick);
    document.removeEventListener('contextmenu', this.onHideRightClick);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}

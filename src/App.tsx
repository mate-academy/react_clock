import { Component } from 'react';
import './App.scss';

import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timeId = 0;

  componentDidMount() {
    this.timeId = window.setInterval(this.setName, 3300);
    document.addEventListener('click', this.leftClick);
    document.addEventListener('contextmenu', this.rightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timeId);
  }

  setName = () => {
    this.setState({ clockName: getRandomName() });
  };

  leftClick = () => {
    this.setState({ hasClock: true });
  };

  rightClick = () => {
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock clockName={clockName} />
        )}
      </div>
    );
  }
}

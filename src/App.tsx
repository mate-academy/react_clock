import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  hasClock: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleRightClick);

    document.addEventListener('contextmenu', this.handleLeftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);

    document.removeEventListener('click', this.handleRightClick);

    document.removeEventListener('contextmenu', this.handleLeftClick);
  }

  handleRightClick = () => {
    this.setState({ hasClock: true });
  };

  handleLeftClick = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render() {
    const {
      clockName,
      hasClock,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}

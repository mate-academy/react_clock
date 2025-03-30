import * as React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string;
  isClockVisible: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  timerId: number | undefined;

  handleRightClick = () => {
    this.setState({ isClockVisible: false });
  };

  handleLeftClick = () => {
    this.setState({ isClockVisible: true });
  };

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleRightClick);
    document.addEventListener('click', this.handleLeftClick);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement('h1', null, 'React clock'),
      this.state.isClockVisible &&
        React.createElement(Clock, { clockName: this.state.clockName }),
    );
  }
}

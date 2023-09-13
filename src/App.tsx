import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  clockName: string,
  isClockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: 'Clock-0',
    isClockVisible: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.rightClick);
    document.addEventListener('click', this.leftClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.rightClick);
    document.removeEventListener('click', this.leftClick);
  }

  rightClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ isClockVisible: false });
  };

  leftClick = () => {
    this.setState({ isClockVisible: true });
  };

  render() {
    const {
      clockName,
      isClockVisible,
    } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}
